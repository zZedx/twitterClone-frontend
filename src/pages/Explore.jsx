import SuggestedUsers from "../features/user/SuggestedUsers";
import Search from "../ui/Search";

const Explore = () => {
  return (
    <>
      <Search addClass="border-b-0 py-1 w-full sm:w-[calc(100%-6rem)] md:w-3/4 lg:w-[calc(66.66%-6rem)] xl:w-2/4 2xl:w-2/6 px-6" />
      <SuggestedUsers />
    </>
  );
};

export default Explore;
