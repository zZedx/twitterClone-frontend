import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useCurrentUser } from "../../ui/ProtectedRoutes";
import { updateUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

const useUpdateProfile = () => {
  const user = useCurrentUser();
  const queryClient = useQueryClient();

  const { mutate: updateProfile, status } = useMutation({
    mutationFn: (data) => updateUser(data),
    onSuccess: () => {
      toast.success("Profile updated successfully");
      queryClient.invalidateQueries(`user-${user.username}`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { updateProfile, status };
};

export default useUpdateProfile;
