import { useState } from "react";
import Header, { Filter } from "../ui/Header";
import CreatePostForm from "../features/posts/CreatePostForm";
import Posts from "../features/posts/Posts";
import usePosts from "../features/posts/usePosts";

const Home = () => {
  const [filter, setFilter] = useState("for-you");
  return (
    <div className="w-full">
      <Header>
        <ul className="flex h-full">
          <Filter
            name="For You"
            active={filter === "for-you"}
            onClick={() => setFilter("for-you")}
          />
          <Filter
            name="Following"
            active={filter === "following"}
            onClick={() => setFilter("following")}
          />
        </ul>
      </Header>
      
      <div className="pt-16">
        <CreatePostForm />
      </div>
      
      <Posts usePosts={usePosts} filter={filter}/>
    </div>
  );
};

export default Home;
