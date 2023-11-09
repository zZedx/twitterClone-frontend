import { Outlet } from "react-router-dom";
import SideBarLeft from "./SideBarLeft";
import SideBarRight from "./SideBarRight";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div className="h-screen">
      <div className="hidden sm:block">
        <SideBarLeft />
      </div>
      <main className="ml-0 sm:ml-24 xl:ml-[25%] w-full sm:w-[calc(100%-6rem)] md:w-3/4 lg:w-[calc(66.66%-6rem)] xl:w-2/4 border-r min-h-full">
        <Header />
        <Outlet />
      </main>
      <SideBarRight />
    </div>
  );
};

export default AppLayout;
