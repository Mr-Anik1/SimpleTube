import { FaUserCircle } from "react-icons/fa";

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex rounded-lg bg-gray-100 p-2 shadow-md">
      <div>
        <FaUserCircle className="h-8 w-8" />
      </div>

      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export { Comment };
