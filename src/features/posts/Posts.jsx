import Spinner from "../../ui/Spinner";
import ServerError from "../../ui/ServerError";
import Post from "./Post";
import usePosts from "./usePosts";

const Posts = () => {
  const { posts, isError, isLoading } = usePosts();

  if (isLoading) return <Spinner />;
  if (isError) return <ServerError />;
  return (
    <ul>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </ul>
  );
};

export default Posts;
