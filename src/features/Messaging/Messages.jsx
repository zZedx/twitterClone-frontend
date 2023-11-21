import { useEffect, useRef } from "react";
import socket from "../../socket";
import Message from "./Message";
import useMessages from "./useMessages";
import Spinner from "../../ui/Spinner";
import ServerError from "../../ui/ServerError";
import { useQueryClient } from "@tanstack/react-query";

const Messages = ({ sharedRoomId}) => {
  const queryClient = useQueryClient();
  const messagesRef = useRef(null);
  const { messages = [], isLoading, isError } = useMessages(sharedRoomId);

  useEffect(() => {
    socket.on("receive_message", async () => {
      await queryClient.invalidateQueries(["messages", sharedRoomId]);
      setTimeout(() => {
        const messagesContainer = messagesRef.current;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }, 0);
    });
  }, [queryClient, sharedRoomId]);
  if (isLoading) return <Spinner />;
  if (isError) return <ServerError>Something went wrong</ServerError>;

  return (
    <>
      {!messages.length ? (
        <h1 className="m-auto text-2xl font-semibold text-brand">
          Start a new conversation
        </h1>
      ) : (
        <ul
          className="flex flex-col w-full gap-3 px-4 py-3 h-[calc(100vh-8rem)] overflow-auto"
          ref={messagesRef}
        >
          {messages.map((message, i) => (
            <Message key={i} message={message} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Messages;
