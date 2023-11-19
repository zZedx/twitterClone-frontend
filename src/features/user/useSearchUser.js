import { useEffect, useState } from "react";
import { searchUsers } from "../../services/apiUsers";

const useSearchUser = (query) => {
  const [searchUserResult, setSearchUserResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query.length > 0) {
      setIsLoading(true);
      searchUsers(query).then((result) => {
        setSearchUserResult(result);
        setIsLoading(false);
      });
    } else {
      setSearchUserResult([]);
    }
  }, [query]);

  return {
    searchUserResult,
    isLoading,
  };
};

export default useSearchUser;
