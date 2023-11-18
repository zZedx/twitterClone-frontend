import { useNavigate } from "react-router-dom";
import Avatar from "../../ui/Avatar";
import { timeAgo } from "../../utils/date";
import CommentButton from "../../ui/CommentButton";
import LikeButton from "../../ui/LikeButton";
import ShareButton from "../../ui/ShareButton";
import { useCurrentUser } from "../../ui/ProtectedRoutes";
import PostOptions from "./PostOptions";

const Post = ({ post, profileUser, isComment = false }) => {
  const navigate = useNavigate();
  const { user: currentUser } = useCurrentUser();

  const { body, createdAt, image, likes, comments } = post;
  let user = profileUser || post.user;

  function toProfile(e) {
    e.stopPropagation();
    navigate(`/${user.username}`);
  }

  return (
    <li
      className="flex gap-4 px-4 py-3 border cursor-pointer"
      onClick={() => {
        !isComment && navigate(`/post/${post._id}`);
      }}
    >
      <Avatar src={user.avatar} onClick={toProfile} />
      <div className="w-full">
        <div className="flex items-center gap-2 -mt-1">
          <span className="font-semibold hover:underline" onClick={toProfile}>
            {user.displayName}
          </span>
          <span className="text-white/40" onClick={toProfile}>
            @{user.username}
          </span>
          <span className="w-1 h-1 rounded-full bg-white/40"></span>
          <span className="text-sm text-white/40">{timeAgo(createdAt)}</span>
          {user._id === currentUser._id && (
            <PostOptions postId={post._id} isComment={isComment}/>
          )}
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
          {!isComment && (
            <CommentButton comments={comments} postId={post._id} />
          )}
          <LikeButton likes={likes} postId={post._id} />
          {!isComment && <ShareButton postId={post._id} />}
        </div>
      </div>
    </li>
  );
};

export default Post;
