import { useNavigate } from "react-router-dom";
import Avatar from "../../ui/Avatar";
import { timeAgo } from "../../utils/date";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { BiMessageAlt } from "react-icons/bi";
import toast from "react-hot-toast";
import useLikePost from "./useLikePost";
import LikeButton from "../../ui/LikeBUtton";

const Post = ({ post }) => {
  const navigate = useNavigate();

  const { body, user, createdAt, image, likes, comments } = post;
  const { likePost, status: likeStatus } = useLikePost();

  function toProfile(e) {
    e.stopPropagation();
    navigate(`/${user.username}`);
  }
  function handleShare(e) {
    e.stopPropagation();
    const urlToCopy = `${window.location.origin}/profile/${user.username}`;
    navigator.clipboard.writeText(urlToCopy);
    toast.success("Post Url Copied to clipboard");
  }

  function handleLike(e) {
    e.stopPropagation();
    likePost(post._id);
  }

  return (
    <li
      className="flex gap-4 px-4 py-4 border cursor-pointer"
      onClick={() => {
        navigate(`/${user.username}/post/${post._id}`);
      }}
    >
      <Avatar src={user.avatar} onClick={toProfile} />
      <div className="w-full">
        <div className="flex items-baseline gap-1">
          <span className="font-semibold hover:underline" onClick={toProfile}>
            {user.displayName}
          </span>
          <span className="text-white/40" onClick={toProfile}>
            @{user.username}
          </span>
          <span className="w-1 h-1 mt-auto mb-auto rounded-full bg-white/40"></span>
          <span className="text-sm text-white/40">{timeAgo(createdAt)}</span>
        </div>
        <div className="mt-1 space-y-2">
          <p
            dangerouslySetInnerHTML={{ __html: body?.replace(/\n/g, "<br>") }}
          />

          {image && (
            <img
              src={image}
              className="object-contain object-center w-full border max-h-[32rem] rounded-2xl"
            />
          )}
        </div>
        <div className="flex gap-8 mt-4 font-semibold">
          <button className="flex items-center gap-2 text-white/50 hover:text-blue-300">
            <span className="text-xl">
              <BiMessageAlt />
            </span>
            <span>{comments.length}</span>
          </button>

          <LikeButton
            onClick={handleLike}
            disabled={likeStatus === "loading"}
            likes={likes}
          />

          <button className="ml-auto text-white/50 hover:text-green-500">
            <span className="text-xl">
              <FaRegShareFromSquare onClick={handleShare} />
            </span>
          </button>
        </div>
      </div>
    </li>
  );
};

export default Post;
