import { useCurrentUser } from "./ProtectedRoutes";

const Avatar = ({src , size , onClick = ()=> {}}) => {
  const {user} = useCurrentUser()
  const avatar = user?.avatar
  
  const customSize = size ? size : "w-10 h-10"
  return (
    <img
      src={src ? src : avatar}
      alt=""
      className={`object-cover object-center w-10 h-10 rounded-full cursor-pointer ${customSize}`}
      onClick={onClick}
    />
  );
};

export default Avatar;
