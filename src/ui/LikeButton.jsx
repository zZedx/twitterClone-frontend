import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import { useCurrentUser } from "./ProtectedRoutes";

const LikeButton = ({onClick , disabled , likes}) => {
  const { user: currentUser } = useCurrentUser();
  const liked = Boolean(likes.find((like) => like === currentUser._id));
  
  return (
    <button
      className={`flex items-center gap-2 hover:text-pink-500 ${
        liked ? "text-pink-500" : "text-white/50"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="text-xl">
        {liked ? <HiHeart /> : <HiOutlineHeart />}
      </span>
      <span>{likes.length}</span>
    </button>
  );
};

export default LikeButton;
