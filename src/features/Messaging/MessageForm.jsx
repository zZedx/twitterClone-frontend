import { useState } from "react";
import { VscSend } from "react-icons/vsc";
import socket from "../../socket";

const MessageForm = ({sharedRoomId}) => {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    socket.emit("send_message", {
      room: sharedRoomId,
      message,
    });
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
        placeholder="Start a new message"
      />
      <button>
        <VscSend className="text-2xl text-brand" />
      </button>
    </form>
  );
};

export default MessageForm;
