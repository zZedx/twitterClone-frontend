import { useNavigate } from "react-router-dom";
import Avatar from "../../ui/Avatar";
import { timeAgo } from "../../utils/date";
import CommentButton from "../../ui/CommentButton";
import LikeButton from "../../ui/LikeBUtton";
import ShareButton from "../../ui/ShareButton";

const Post = ({ post, profileUser }) => {
  const navigate = useNavigate();

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
        navigate(`/${user.username}/post/${post._id}`);
      }}
    >
      <Avatar src={user.avatar} onClick={toProfile} />
      <div className="w-full">
        <div className="flex items-baseline gap-2">
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
          <CommentButton comments={comments} />
          <LikeButton likes={likes} postId={post._id} />
          <ShareButton postId={post._id} username={user.username} />
        </div>
      </div>
    </li>
  );
};

export default Post;
