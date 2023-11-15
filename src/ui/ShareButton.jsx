import toast from "react-hot-toast";
import { FaRegShareFromSquare } from "react-icons/fa6";

const ShareButton = ({username, postId}) => {
  function handleShare(e) {
    e.stopPropagation();
    const urlToCopy = `${window.location.origin}/${username}/post/${postId}`;
    navigator.clipboard.writeText(urlToCopy);
    toast.success("Post Url Copied to clipboard");
  }
  return (
    <button className="ml-auto text-white/50 hover:text-green-500">
      <span className="text-xl">
        <FaRegShareFromSquare onClick={handleShare} />
      </span>
    </button>
  );
};

export default ShareButton;
