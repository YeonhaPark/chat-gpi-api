import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
const Home = () => {
  const [content, setContent] = useState("");
  const onSubmitChat = async (e) => {
    e.preventDefault();
    try {
      const data = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content,
          },
        ],
      };
      const { choices } = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + import.meta.env.VITE_GPT_KEY,
          },
        }
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form className="flex justify-center" onSubmit={onSubmitChat}>
        <input
          className="rounded-lg border-2 border-blue-300 focus:outline-blue-600 "
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="ml-4 flex items-center gap-1 bg-blue-500 px-4 text-xl text-white rounded-lg shadow-sm disabled:bg-blue-100"
          type="submit"
          disabled={!content}
        >
          검색
          <FiSearch />
        </button>
      </form>
    </div>
  );
};

export default Home;
