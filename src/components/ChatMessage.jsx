import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
  return (
    <>
      <div className="my-2 flex rounded-lg bg-stone-100 p-2 shadow-sm">
        <FaUserCircle className="h-6 w-6 shrink-0" />
        <span className="px-2 font-bold">{name}</span>
        <span>{message}</span>
      </div>
    </>
  );
};

export { ChatMessage };
