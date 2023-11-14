import { useState } from "react";
import Header from "../ui/Header";
import CreatePostForm from "../features/posts/CreatePostForm";
import Posts from "../features/posts/Posts";

const Home = () => {
  const [filter , setFilter] = useState("for-you")
  return (
    <div>
      <Header filter={filter} setFilter={setFilter}/>
      <CreatePostForm/>
      <Posts/>
    </div>
  );
};

export default Home;
