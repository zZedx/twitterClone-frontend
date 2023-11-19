import { useLocation } from "react-router-dom";
import Search from "./Search";

const SideBarRight = () => {
  const location = useLocation();
  return (
    <>
      {!location.pathname.includes("explore") && (
         <Search addClass={"border-none w-[calc(33.333%-2rem)] xl:w-[calc(25%-2rem)]"}/>
      )}
    </>
  );
};

export default SideBarRight;
