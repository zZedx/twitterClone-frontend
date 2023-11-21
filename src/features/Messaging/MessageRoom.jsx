import { useEffect } from "react";
import Header from "../../ui/Header";
import BackButton from "../../ui/BackButton";
import { Link, useParams } from "react-router-dom";
import useUserProfile from "../profile/useUserProfile";
import Spinner from "../../ui/Spinner";
import ServerError from "../../ui/ServerError";
import { useCurrentUser } from "../../ui/ProtectedRoutes";
import MessageForm from "./MessageForm";
import socket from "../../socket";
import Messages from "./Messages";

const MessageRoom = () => {
  const { username } = useParams();

  const { user: receiver, isError, isLoading } = useUserProfile(username);
  const { user: sender } = useCurrentUser();
  const sortedUserIds = [username, sender.username].sort();
  const sharedRoomId = sortedUserIds.join("-");

  useEffect(() => {
    socket.connect();
    socket.emit("join_room", {
      room: sharedRoomId,
    });
    return () => {
      socket.emit("leave_room", {
        room: sharedRoomId,
      });
      socket.disconnect();
    };
  }, [sharedRoomId]);

  if (isLoading) return <Spinner />;
  if (isError) return <ServerError>Something Went Wrong</ServerError>;

  return (
    <div>
      <Header addClass="w-full px-4 sm:w-[calc(100%-6rem)] md:w-3/4 lg:w-[calc(66.66%-6rem)] xl:w-2/4 2xl:w-2/6">
        <BackButton />
        <Link to={`/${receiver.username}`} className="ml-4 text-xl font-bold">{receiver.username}</Link>
      </Header>
      <div className="flex flex-col h-[calc(100vh-5.5rem)] sm:h-screen pt-16 overflow-auto">
        <Messages sharedRoomId={sharedRoomId} />
        <div className="flex w-full p-2 mt-auto border">
          <MessageForm sharedRoomId={sharedRoomId} receiver={receiver} />
        </div>
      </div>
    </div>
  );
};

export default MessageRoom;
