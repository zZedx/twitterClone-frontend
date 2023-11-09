import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiMiniHome,
  HiUser,
  HiOutlineUser,
  HiEnvelope,
  HiOutlineEnvelope,
  HiMagnifyingGlass,
  HiOutlineMagnifyingGlass,
  HiOutlineEllipsisHorizontal,
  HiOutlineHandRaised,
} from "react-icons/hi2";
import Logo from "./Logo";
import Button from "./Button";
import Avatar from "./Avatar";

const SideBarLeft = () => {
  return (
    <aside className="fixed top-0 left-0 flex flex-col items-center w-24 h-screen gap-2 px-2 py-4 border-r xl:pr-8 xl:w-1/4 2xl:pl-24 xl:pl-10 xl:items-start">
      <Logo />

      <StyledLink
        to="/home"
        text="Home"
        icon={<HiOutlineHome />}
        activeIcon={<HiMiniHome />}
        activeStyle={"font-bold"}
      />
      <StyledLink
        to="/messages"
        text="Messages"
        icon={<HiOutlineEnvelope />}
        activeIcon={<HiEnvelope />}
        activeStyle={"font-bold"}
      />
      <StyledLink
        to="/search"
        text="Explore"
        icon={<HiOutlineMagnifyingGlass />}
        activeIcon={<HiMagnifyingGlass />}
        activeStyle={"font-bold"}
      />
      <StyledLink
        to="/profile"
        text="Profile"
        icon={<HiOutlineUser />}
        activeIcon={<HiUser />}
        activeStyle={"font-bold"}
      />

      <Button>
        <span className="hidden xl:block">Tweet</span>
        <HiOutlineHandRaised className="block xl:hidden" />
      </Button>

      <div className="flex items-center gap-4 px-4 py-2 mt-auto mb-2 rounded-lg cursor-pointer xl:w-full hover:bg-secondary">
        <Avatar />
        <div className="flex-col hidden xl:flex">
          <span className="ml-1 font-bold">John Doe</span>
          <span className="text-gray-500">@johndoe</span>
        </div>
        <div className="hidden ml-auto text-3xl text-white xl:block">
          <HiOutlineEllipsisHorizontal />
        </div>
      </div>
    </aside>
  );
};

function StyledLink({ activeIcon, icon, activeStyle, text, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        (isActive ? activeStyle : "font-semibold") +
        " flex items-center xl:w-full gap-4 text-lg tracking-wide rounded-lg px-4 py-2 hover:bg-secondary"
      }
    >
      {({ isActive }) =>
        isActive ? (
          <>
            <div className="text-3xl">{activeIcon}</div>
            <span className="hidden xl:block">{text}</span>
          </>
        ) : (
          <>
            <div className="text-3xl">{icon}</div>
            <span className="hidden xl:block">{text}</span>
          </>
        )
      }
    </NavLink>
  );
}

export default SideBarLeft;
