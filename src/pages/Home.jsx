import { useState } from "react";
import Header, { Filter } from "../ui/Header";
import CreatePostForm from "../features/posts/CreatePostForm";
import Posts from "../features/posts/Posts";
import usePosts from "../features/posts/usePosts";

const Home = () => {
  const [filter, setFilter] = useState("for-you");
  return (
    <div className="w-full">
      <Header addClass="w-full sm:w-[calc(100%-6rem)] md:w-3/4 lg:w-[calc(66.66%-6rem)] xl:w-2/4 2xl:w-2/6">
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

      <Posts usePosts={usePosts} filter={filter} />
    </div>
  );
};

export default Home;
