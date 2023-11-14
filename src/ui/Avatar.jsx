import useUser from "../features/user/useUser";

const Avatar = ({src}) => {
  const {user} = useUser()
  const avatar = user?.avatar
  return (
    <img
      src={src ? src : avatar}
      alt=""
      className="object-cover object-center w-10 h-10 rounded-full"
    />
  );
};

export default Avatar;
