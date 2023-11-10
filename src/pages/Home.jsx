import { useState } from "react";
import Header from "../ui/Header";
import CreatePostForm from "../features/posts/CreatePostForm";

const Home = () => {
  const [filter , setFilter] = useState("for-you")
  return (
    <div>
      <Header filter={filter} setFilter={setFilter}/>
      <CreatePostForm/>
    </div>
  );
};

export default Home;
