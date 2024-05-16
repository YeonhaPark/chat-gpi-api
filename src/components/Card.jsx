import { GoDotFill } from "react-icons/go";
import { MdOutlineMessage, MdQuestionMark } from "react-icons/md";
import { TbMoodPuzzled } from "react-icons/tb";
import ReactMarkdown from "react-markdown";
const Card = ({ role, content, isLoading }) => {
  switch (role) {
    case "assistant":
      return (
        <li className="text-gray-200 font-thin px-4 mt-2 mb-6 rounded-md text-lg shadow-md ">
          <div className="flex gap-2 items-center">
            <MdOutlineMessage className="w-8 flex-shrink-0 self-baseline" />
            {isLoading ? (
              <div className="relative h-16">
                <div className="absolute bounce-ball first w-3 h-3 opacity-30 rounded-full bg-slate-400 left-8"></div>
                <div className="absolute bounce-ball second w-3 h-3 opacity-40 rounded-full bg-slate-400 left-12"></div>
                <div className="absolute bounce-ball third w-3 h-3 opacity-60 rounded-full bg-slate-400 left-16"></div>
              </div>
            ) : (
              <div>
                <ReactMarkdown>{` ${content}`}</ReactMarkdown>
              </div>
            )}
          </div>
        </li>
      );
    case "user":
      return (
        <li className="text-gray-200 px-4 rounded-md text-lg shadow-md ">
          <div className="mb-2 flex gap-2 items-center">
            <TbMoodPuzzled className="w-8" />
            {` ${content}`}
          </div>
        </li>
      );
    default:
      return null;
  }
};

export default Card;
