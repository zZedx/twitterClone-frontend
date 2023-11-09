import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const SideBarLeft = () => {
  return (
    <div className="fixed top-0 left-0 flex flex-col w-1/4 h-screen gap-3 border-r">
      <Logo />
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/messages">Messages</NavLink>
      <NavLink to="/:userid">Profile</NavLink>
    </div>
  );
};

export default SideBarLeft;
