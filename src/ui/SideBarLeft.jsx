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
} from "react-icons/hi2";
import { FaFeatherAlt } from "react-icons/fa";
import Logo from "./Logo";
import Button from "./Button";
import User from "../features/user/User";

const SideBarLeft = () => {
  return (
    <>
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

      <Button addClass="w-fit xl:w-full">
        <span className="hidden xl:block">Tweet</span>
        <FaFeatherAlt className="block xl:hidden" />
      </Button>

      <User />
    </>
  );
};

function StyledLink({ activeIcon, icon, activeStyle, text, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        (isActive ? activeStyle : "font-semibold") +
        " flex items-center xl:w-full gap-4 text-lg tracking-wide rounded-lg px-4 py-3 hover:bg-secondary"
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
