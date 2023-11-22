import { useNavigate } from "react-router-dom";
import ServerError from "../../ui/ServerError";
import Spinner from "../../ui/Spinner";
import FollowButton from "../profile/FollowButton";
import useSuggestedUsers from "./useSuggestedUsers";

const SuggestedUsers = () => {
  const navigate = useNavigate();
  const { suggestedUsers = [], isLoading, isError } = useSuggestedUsers();

  if (isLoading) return <Spinner />;
  if (isError) return <ServerError>Something went wrong</ServerError>;
  return (
    <div className="flex flex-col px-4 py-2 mt-20 rounded-xl bg-secondary">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">Who to follow</h2>
      </div>
      <ul>
        {suggestedUsers.map((user) => (
          <li
            key={user._id}
            className="flex items-center justify-between w-full py-2 space-x-4 rounded-md shadow-md cursor-pointer"
            onClick={()=> navigate(`/${user.username}`)}
          >
            <div className="flex items-center space-x-4">
              <img
                className="w-12 h-12 rounded-full"
                src={user.avatar}
                alt={user.name}
              />
              <div className="flex flex-col">
                <span className="font-semibold">{user.displayName}</span>
                <span className="text-sm text-white/40">@{user.username}</span>
              </div>
            </div>
            <FollowButton userId={user._id} username={user.username}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestedUsers;
