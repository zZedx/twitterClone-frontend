import { useQuery } from "@tanstack/react-query";
import { getFollowedUsers } from "../../services/apiUsers";

const useFollowedUsers = () => {
  const {
    data: followedUsers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["followedUsers"],
    queryFn: getFollowedUsers,
  });
  return { followedUsers, isLoading, isError };
};

export default useFollowedUsers;
