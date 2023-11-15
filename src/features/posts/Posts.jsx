import Spinner from "../../ui/Spinner";
import ServerError from "../../ui/ServerError";
import Post from "./Post";

const Posts = ({usePosts , postsObj , profileUser}) => {
  const { posts, isError = false , isLoading = false } = usePosts?.() || postsObj;

  if (isLoading) return <Spinner />;
  if (isError) return <ServerError />;

  const sortPosts = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return (
    <ul>
      {sortPosts.map((post) => (
        <Post key={post._id} post={post} profileUser={profileUser}/>
      ))}
    </ul>
  );
};

export default Posts;
