import Post from "./Post";
import usePosts from "./usePosts";

const Posts = () => {
  const { posts, isError, isLoading } = usePosts();

  if (isLoading) return <div>Loading...</div>;
  return (
    <ul>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </ul>
  );
};

export default Posts;
