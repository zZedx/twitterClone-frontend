import { Link } from "react-router-dom";

const User = ({user}) => {
  return (
    <li
      key={user.id}
      className="px-4 py-2 bg-black rounded-lg bg-opacity-80 backdrop-blur-lg"
    >
      <Link to={`/${user.username}`} className="flex items-center gap-4">
        <img
          src={user.avatar}
          alt={user.username}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-white">{user.displayName}</span>
          <span className="text-white/50">@{user.username}</span>
        </div>
      </Link>
    </li>
  );
};

export default User;
