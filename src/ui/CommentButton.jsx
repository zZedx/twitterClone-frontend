import { BiMessageAlt } from "react-icons/bi";
import FullModal from "./FullModal";
import CreatePostForm from "../features/posts/CreatePostForm";

const CommentButton = ({ comments , postId}) => {
  return (
    <FullModal>
      <FullModal.Button opens={"comment"}>
      <button className="flex items-center gap-2 text-white/50 hover:text-blue-300">
        <span className="text-xl">
          <BiMessageAlt />
        </span>
        <span>{comments.length}</span>
      </button>
      </FullModal.Button>
      <FullModal.Window name={"comment"}>
        <CreatePostForm post={false} postId={postId}/>
      </FullModal.Window>
    </FullModal>
  );
};

export default CommentButton;
