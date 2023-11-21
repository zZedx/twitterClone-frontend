import { useCurrentUser } from "../../ui/ProtectedRoutes";
import { timeAgo } from "../../utils/date";

const Message = ({ message }) => {
  const { user: sender } = useCurrentUser();

  const isYourMessage = message.to.username !== sender.username;
  return (
    <li
      className={`w-fit max-w-[60%] flex flex-col gap-1 ${
        isYourMessage
          ? "ml-auto"
          : "mr-auto"
      }`}
    >
      <p
        className={`px-5 py-2 rounded-full break-words ${
          isYourMessage
            ? "bg-brand ml-auto rounded-br-lg"
            : "bg-[#2f3336] rounded-bl-lg mr-auto"
        }`}
      >
        {message.message}
      </p>
      <span
        className={`text-sm text-white/40 ${
          isYourMessage ? "ml-auto" : "mr-auto"
        }`}
      >
        {timeAgo(message.createdAt)} ago
      </span>
    </li>
  );
};

export default Message;
