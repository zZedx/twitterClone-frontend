import { useQuery } from "@tanstack/react-query";
import { getMessageUser } from "../../services/apiMessages";

const useMessageUsers = () => {
  const {
    data: messageUsers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["messageUsers"],
    queryFn: getMessageUser,
  });
  return { messageUsers, isLoading, isError };
};

export default useMessageUsers;
