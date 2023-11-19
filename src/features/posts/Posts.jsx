import Spinner from "../../ui/Spinner";
import ServerError from "../../ui/ServerError";
import Post from "./Post";

const Posts = ({usePosts , postsObj , profileUser ,isComment , filter}) => {
  const { posts, isError = false , isLoading = false } = usePosts?.(filter) || postsObj;

  if (isLoading) return <Spinner />;
  if (isError) return <ServerError>Cound not fetch posts</ServerError>;

  const sortPosts = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if(!posts.length) return (<div className="flex items-center justify-center h-64">
    <span className="text-2xl font-bold text-white/50">No {isComment ? "Comments" : "Posts"}</span>
  </div>);
  return (
    <ul>
      {sortPosts.map((post) => (
        <Post key={post._id} post={post} profileUser={profileUser} isComment={isComment}/>
      ))}
    </ul>
  );
};

export default Posts;
