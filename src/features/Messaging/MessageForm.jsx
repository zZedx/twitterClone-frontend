import { useState } from "react";
import { VscSend } from "react-icons/vsc";
import socket from "../../socket";
import { useCurrentUser } from "../../ui/ProtectedRoutes";

const MessageForm = ({sharedRoomId , receiver}) => {
  const [message, setMessage] = useState("");
  const {user : sender} = useCurrentUser();

  function handleSubmit(e) {
    e.preventDefault();
    if(!message) return;
    socket.emit("send_message", {
      room: sharedRoomId,
      message,
      sender,
      receiver,
    });
    setMessage("");
  }
  return (
    <form
      className="flex items-center w-full gap-4 px-4 rounded-full bg-secondary"
      onSubmit={handleSubmit}
    >
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        className="w-full bg-transparent outline-none min-h-[3rem]"
        placeholder="Hello"
      />
      <button disabled={!message} className="disabled:cursor-not-allowed">
        <VscSend className="text-2xl text-brand" />
      </button>
    </form>
  );
};

export default MessageForm;
