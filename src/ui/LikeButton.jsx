import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import { useCurrentUser } from "./ProtectedRoutes";
import useLikePost from "../features/posts/useLikePost";

const LikeButton = ({likes , postId }) => {
  const { user: currentUser } = useCurrentUser();
  const { likePost, status } = useLikePost();
  const liked = Boolean(likes.find((like) => like === currentUser._id));

  function handleLike(e) {
    e.stopPropagation();
    likePost(postId);
  }
  
  return (
    <button
      className={`flex items-center gap-2 hover:text-pink-500 ${
        liked ? "text-pink-500" : "text-white/50"
      }`}
      onClick={handleLike}
      disabled={status === "pending"}
    >
      <span className="text-xl">
        {liked ? <HiHeart /> : <HiOutlineHeart />}
      </span>
      <span>{likes.length}</span>
    </button>
  );
};

export default LikeButton;
