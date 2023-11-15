import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../services/apiUsers";

const useUserProfile = (username) => {
  const {
    data: user,
    isError,
    isLoading,
  } = useQuery({
    queryKey: [`user-${username}`],
    queryFn: () => getUserProfile(username),
  });
  return { user, isError, isLoading };
};

export default useUserProfile;
