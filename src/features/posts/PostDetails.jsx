import Header from "../../ui/Header";
import BackButton from "../../ui/BackButton";
import Avatar from "../../ui/Avatar";
import usePost from "./usePost";
import Spinner from "../../ui/Spinner";
import ServerError from "../../ui/ServerError";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/date";
import LikeButton from "../../ui/LikeButton";
import CommentButton from "../../ui/CommentButton";
import ShareButton from "../../ui/ShareButton";
import CreatePostForm from "./CreatePostForm";
import Posts from "./Posts";
import PostOptions from "./PostOptions";
import { useCurrentUser } from "../../ui/ProtectedRoutes";

const PostDetails = () => {
  const { post, isLoading, isError } = usePost();
  const {user : currentUser} = useCurrentUser();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  if (isError) return <ServerError>No Post Found</ServerError>;
  
  if(!post) return <ServerError>No Post Found</ServerError>;

  const { user, body, createdAt, likes, comments, image } = post;

  function toProfile(e) {
    e.stopPropagation();
    navigate(`/${user.username}`);
  }

  return (
    <>
      <Header addClass="gap-4 px-4 py-3">
        <BackButton />
        <span className="text-xl font-bold">Post</span>
      </Header>
      <div className="p-4 pt-20">
        <div className="flex items-center gap-3">
          <Avatar src={user.avatar} onClick={toProfile} />
          <div className="flex flex-col gap-1">
            <span
              className="font-bold leading-4 cursor-pointer hover:underline"
              onClick={toProfile}
            >
              {user.displayName}
            </span>
            <span
              className="-ml-1 leading-4 cursor-pointer text-white/40"
              onClick={toProfile}
            >
              @{user.username}
            </span>
          </div>
            {user._id === currentUser._id && <PostOptions postId={post._id} />}
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <p
            dangerouslySetInnerHTML={{ __html: body?.replace(/\n/g, "<br>") }}
          />

          {image && (
            <img
              src={image}
              className="object-contain object-center w-full border max-h-[38rem] rounded-2xl"
            />
          )}

          <span className="mt-2 text-sm text-white/40">
            {formatDate(createdAt)}
          </span>
        </div>

        <div className="flex gap-8 px-2 py-3 mt-2 border-t border-b">
          <CommentButton comments={comments} postId={post._id} />
          <LikeButton likes={likes} postId={post._id} />
          <ShareButton postId={post._id} />
        </div>
      </div>
      <CreatePostForm post={false} postId={post._id} />
      <Posts postsObj={{ posts: comments }} isComment={true} />
    </>
  );
};

export default PostDetails;
