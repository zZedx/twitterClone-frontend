import { BiMessageAlt } from "react-icons/bi";

const CommentButton = ({comments}) => {
  return (
    <button className="flex items-center gap-2 text-white/50 hover:text-blue-300">
      <span className="text-xl">
        <BiMessageAlt />
      </span>
      <span>{comments.length}</span>
    </button>
  );
};

export default CommentButton;
