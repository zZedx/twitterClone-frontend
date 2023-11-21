import { useEffect, useState } from "react";
import Header from "../../ui/Header";
import BackButton from "../../ui/BackButton";
import { useParams } from "react-router-dom";
import useUserProfile from "../profile/useUserProfile";
import Spinner from "../../ui/Spinner";
import ServerError from "../../ui/ServerError";
import { useCurrentUser } from "../../ui/ProtectedRoutes";
import MessageForm from "./MessageForm";
import socket from "../../socket";

const MessageRoom = () => {
  const { username } = useParams();

  const { user: receiver, isError, isLoading } = useUserProfile(username);
  const { user: sender } = useCurrentUser();
  const sortedUserIds = [username, sender.username].sort();
  const sharedRoomId = sortedUserIds.join("-");

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.connect();
    socket.emit("join_room", {
      room: sharedRoomId,
    });
    socket.on("receive_message", (data) => {
      console.log(data);
      setMessages([...messages, data]);
    });
    return () => {
      socket.emit("leave_room", {
        room: sharedRoomId,
      });
      socket.disconnect();
    };
  }, [sharedRoomId, messages]);

  if (isLoading) return <Spinner />;
  if (isError) return <ServerError>Something Went Wrong</ServerError>;

  return (
    <div>
      <Header addClass="w-full px-4 sm:w-[calc(100%-6rem)] md:w-3/4 lg:w-[calc(66.66%-6rem)] xl:w-2/4 2xl:w-2/6">
        <BackButton />
        <h1 className="ml-4 text-xl font-bold">{receiver.username}</h1>
      </Header>
      <div className="flex flex-col h-screen pt-16 overflow-auto">
        <ul className="w-full">
          {messages.map((message , i) => (
            <li key={i}>
              <p>{message}</p>
            </li>
          ))}
        </ul>
        <div className="flex w-full p-2 mt-auto border">
          <MessageForm sharedRoomId={sharedRoomId} />
        </div>
      </div>
    </div>
  );
};

export default MessageRoom;