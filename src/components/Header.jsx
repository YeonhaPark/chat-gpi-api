import { Link, useLocation } from "react-router-dom";
import c from "classnames";

const Header = () => {
  const location = useLocation();
  console.log({ location });
  return (
    <div className="p-4 flex justify-center gap-8">
      <button
        className={c(
          {
            "bg-blue-500": location.pathname === "/",
            "bg-blue-400": location.pathname !== "/",
          },
          "py-2 px-3  bg-pink-600 rounded-lg text-white font-semibold "
        )}
      >
        <Link to="/">질문하기</Link>{" "}
      </button>
      <button
        className={c(
          {
            "bg-blue-500": location.pathname === "/chat-list",
            "bg-blue-400": location.pathname !== "/chat-list",
          },
          "py-2 px-3 bg-pink-600 rounded-lg text-white font-semibold "
        )}
      >
        <Link to="/chat-list">내 질문 리스트</Link>
      </button>
    </div>
  );
};

export default Header;
