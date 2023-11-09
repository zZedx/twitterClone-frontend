import { Outlet } from "react-router-dom";
import SideBarLeft from "./SideBarLeft";
import SideBarRight from "./SideBarRight";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div className="h-screen">
      <SideBarLeft />
      <main className="ml-[25%] w-2/4 border-r min-h-full">
        <Header />
        <Outlet />
      </main>
      <SideBarRight />
    </div>
  );
};

export default AppLayout;
