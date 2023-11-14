import { Outlet } from "react-router-dom";
import SideBarLeft from "./SideBarLeft";
import SideBarRight from "./SideBarRight";

const AppLayout = () => {
  return (
    <div className="h-screen">
      <aside className="fixed bottom-0 left-0 flex items-center justify-between w-full sm:gap-2 sm:px-2 py-4 bg-black border-t border-r sm:border-t-0 sm:w-24 sm:h-screen sm:top-0 sm:left-0 sm:flex-col sm:flex xl:pr-8 xl:w-1/4 2xl:pl-24 xl:pl-10 xl:items-start 2xl:left-[8.33%]">
        <SideBarLeft />
      </aside>

      <main className="ml-0 sm:ml-24 xl:ml-[25%] 2xl:ml-[33.3%] w-full sm:w-[calc(100%-6rem)] md:w-3/4 lg:w-[calc(66.66%-6rem)] xl:w-2/4 2xl:w-2/6 border-r min-h-full">
        <Outlet />
      </main>
      
      <aside className="fixed top-0 right-0 hidden w-2/6 h-screen border-l xl:w-1/4 2xl:right-[8.4%] lg:block">
        <SideBarRight />
      </aside>
    </div>
  );
};

export default AppLayout;
