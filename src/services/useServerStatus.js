import { useQuery } from "@tanstack/react-query";
import { checkStatus } from "./apiAuth";

const useServerStatus = () => {
  const {
    data: status,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["status"],
    queryFn: checkStatus,
    retry: true,
  });
  return { status, isLoading, isError };
};

export default useServerStatus;
