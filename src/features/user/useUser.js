import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";

const useUser = () => {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry : false
  });
  return { user, isLoading, isError };
};

export default useUser;
