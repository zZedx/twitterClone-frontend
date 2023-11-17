import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useCurrentUser } from "../../ui/ProtectedRoutes";
import { updateUser } from "../../services/apiAuth";

const useUpdateProfile = () => {
  const user = useCurrentUser();
  const queryClient = useQueryClient();

  const { mutate: updateProfile, status } = useMutation({
    mutationFn: (data) => updateUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries(`user-${user.username}`);
    },
  });
  return { updateProfile, status };
};

export default useUpdateProfile;
