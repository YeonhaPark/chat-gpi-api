import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineLoading } from "react-icons/ai";
import axios from "axios";
import ChatList from "../components/CardList";
const Home = () => {
  const [content, setContent] = useState("");
  const [chatlist, setChatlist] = useState(
    JSON.parse(localStorage.getItem("gpt")) || []
  );
  const [isLoading, setIsLoading] = useState(false);
  const onSubmitChat = async (e) => {
    e.preventDefault();
    try {
      const gptHistory = localStorage.getItem("gpt");
      const historyArr = gptHistory ? JSON.parse(gptHistory) : [];
      const concatenated = historyArr.concat({
        role: "user",
        content,
      });
      const body = {
        model: "gpt-3.5-turbo",
        messages: concatenated,
      };

      setIsLoading(true);

      const { data } = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        JSON.stringify(body),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + import.meta.env.VITE_GPT_KEY,
          },
        }
      );
      setContent("");

      const res = [...body.messages, data.choices[0].message];
      localStorage.setItem(
        "gpt",
        JSON.stringify([...body.messages, data.choices[0].message])
      );
      setChatlist(res);
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="pb-20">
      <ul className="mt-8 px-4">
        {
          <ChatList
            chatlist={chatlist}
            isLoading={isLoading}
            newQuestion={content}
          />
        }
      </ul>
      <form className="pr-8 pl-16 flex justify-center" onSubmit={onSubmitChat}>
        <input
          className="rounded-lg border-2 h-10 py-1 px-2 border-blue-300 focus:outline-blue-600 flex-grow disabled:bg-slate-400"
          type="text"
          value={content}
          disabled={isLoading}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="ml-4 bg-pink-600 flex items-center gap-1  px-4 text-lg text-white rounded-lg shadow-sm disabled:bg-pink-200"
          type="submit"
          disabled={!content || isLoading}
        >
          검색
          {isLoading ? (
            <AiOutlineLoading className="animate-spin" />
          ) : (
            <FiSearch />
          )}
        </button>
      </form>
    </div>
  );
};

export default Home;
