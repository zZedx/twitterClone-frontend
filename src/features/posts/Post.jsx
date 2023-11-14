import { useNavigate } from "react-router-dom";
import Avatar from "../../ui/Avatar";
import { timeAgo } from "../../utils/date";
import { HiOutlineHeart } from "react-icons/hi2";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { BiMessageAlt } from "react-icons/bi";
import toast from "react-hot-toast";

const Post = ({ post }) => {
  const { body, user, createdAt, image, likes, comments } = post;
  const navigate = useNavigate();

  function toProfile(){
    navigate(`/profile/${user.username}`)
  }
  function handleShare(e){
    e.stopPropagation()
    const urlToCopy = `${window.location.origin}/profile/${user.username}`
    navigator.clipboard.writeText(urlToCopy)
    toast.success("Post Url Copied to clipboard")
  }

  return (
    <li className="flex gap-4 px-4 py-4 border cursor-pointer">
      <Avatar src={user.avatar} onClick={toProfile}/>
      <div className="w-full">
        <div
          className="flex items-baseline gap-1"
        >
          <span className="font-semibold hover:underline" onClick={toProfile}>
            {user.displayName}
          </span>
          <span className="text-white/40" onClick={toProfile}>@{user.username}</span>
          <span className="w-1 h-1 mt-auto mb-auto rounded-full bg-white/40"></span>
          <span className="text-sm text-white/40">{timeAgo(createdAt)}</span>
        </div>
        <div className="mt-1 space-y-2">
          <p>{body}</p>
          {!image && (
            <img
              src={image}
              className="w-full h-48 bg-yellow-200 rounded-2xl"
            />
          )}
        </div>
        <div className="flex gap-5 mt-4 font-semibold">
          <button className="flex items-center gap-1 text-white/50 hover:text-blue-300">
            <span className="text-xl">
              <BiMessageAlt />
            </span>
            <span>{comments.length}</span>
          </button>
          <button className="flex items-center gap-1 text-white/50 hover:text-pink-500">
            <span className="text-xl">
              <HiOutlineHeart />
            </span>
            <span>{likes.length}</span>
          </button>
          <button className="ml-auto text-white/50 hover:text-green-500">
            <span className="text-xl">
              <FaRegShareFromSquare onClick={handleShare}/>
            </span>
          </button>
        </div>
      </div>
    </li>
  );
};

export default Post;
