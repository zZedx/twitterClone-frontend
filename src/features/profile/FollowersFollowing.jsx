import { useLocation, useParams } from "react-router-dom";
import UsersList from "../../ui/UsersList";
import useUserProfile from "./useUserProfile";
import Spinner from "../../ui/Spinner";
import ServerError from "../../ui/ServerError";
import Header from "../../ui/Header";
import BackButton from "../../ui/BackButton";

const FollowersFollowing = () => {
  const location = useLocation();
  const { username } = useParams();
  const { user, isLoading, isError } = useUserProfile(username);
  if (isLoading) return <Spinner />;
  if (!user || isError) return <ServerError>Profile not found</ServerError>;

  const isPathFollowers = location.pathname === `/${username}/followers`;

  return (
    <>
      <Header addClass="gap-4 px-4 py-3 w-full sm:w-[calc(100%-6rem)] md:w-3/4 lg:w-[calc(66.66%-6rem)] xl:w-2/4 2xl:w-2/6">
        <BackButton />
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">
            {isPathFollowers ? "Followers" : "Following"}
          </h2>
        </div>
      </Header>
      <div className="px-4 mt-16">
        <UsersList users={isPathFollowers ? user.followers : user.following} />
      </div>
    </>
  );
};

export default FollowersFollowing;
