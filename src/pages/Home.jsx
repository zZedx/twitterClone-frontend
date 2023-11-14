import { useState } from "react";
import Header from "../ui/Header";
import CreatePostForm from "../features/posts/CreatePostForm";
import Posts from "../features/posts/Posts";

const Home = () => {
  const [filter, setFilter] = useState("for-you");
  return (
    <div className="w-full">
      <Header filter={filter} setFilter={setFilter} />
      <div className="pt-16">
        <CreatePostForm />
      </div>
      <Posts />
    </div>
  );
};

export default Home;
