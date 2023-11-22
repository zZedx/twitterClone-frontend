import useMessageUsers from "../features/Messaging/useMessageUsers";
import Header from "../ui/Header";
import ServerError from "../ui/ServerError";
import Spinner from "../ui/Spinner";
import User from "../ui/User";

const Messages = () => {
  const { messageUsers, isLoading, isError } = useMessageUsers();
  if (isLoading) return <Spinner />;
  if (isError) return <ServerError>Something Went Wrong</ServerError>;
  return (
    <>
      <Header addClass="w-full px-6 sm:w-[calc(100%-6rem)] md:w-3/4 lg:w-[calc(66.66%-6rem)] xl:w-2/4 2xl:w-2/6">
        <h1 className="text-xl font-bold">Messages</h1>
      </Header>
      <ul className="mt-16">
        {messageUsers.map((user) => (
          <User key={user._id} user={user} to={`/message/${user.username}`} />
        ))}
      </ul>
    </>
  );
};

export default Messages;
