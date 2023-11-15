import Spinner from "../../ui/Spinner";
import ServerError from "../../ui/ServerError";
import Post from "./Post";
import usePosts from "./usePosts";

const Posts = ({usePosts}) => {
  const { posts, isError, isLoading } = usePosts();

  if (isLoading) return <Spinner />;
  if (isError) return <ServerError />;

  const sortPosts = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return (
    <ul>
      {sortPosts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </ul>
  );
};

export default Posts;
