import ServerError from "../../ui/ServerError";
import Spinner from "../../ui/Spinner";
import useSuggestedUsers from "./useSuggestedUsers";
import UsersList from "../../ui/UsersList";

const SuggestedUsers = () => {
  const { suggestedUsers = [], isLoading, isError } = useSuggestedUsers();

  if (isLoading) return <Spinner />;
  if (isError) return <ServerError>Something went wrong</ServerError>;
  return (
    <div className="flex flex-col px-4 py-2 mt-20 rounded-xl bg-secondary">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">Who to follow</h2>
      </div>
      <UsersList users={suggestedUsers} />
    </div>
  );
};

export default SuggestedUsers;
