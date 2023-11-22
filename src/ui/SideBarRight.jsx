import { useLocation } from "react-router-dom";
import Search from "./Search";
import SuggestedUsers from "../features/user/SuggestedUsers";

const SideBarRight = () => {
  const location = useLocation();
  return (
    <>
      {!location.pathname.includes("explore") && (
        <>
          <Search
            addClass={
              "border-none w-[calc(33.333%-2rem)] xl:w-[calc(25%-2rem)]"
            }
          />
          <SuggestedUsers />
        </>
      )}
    </>
  );
};

export default SideBarRight;
