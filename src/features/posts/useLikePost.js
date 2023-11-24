import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likePost as likePostApi} from "../../services/apiPosts";
import toast from "react-hot-toast";

const useLikePost = () => {
  const queryClient = useQueryClient();
  const { mutate: likePost, status } = useMutation({
    mutationFn: (id) => likePostApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
    onError: (e) => {
      toast.error(e.message);
    }
  });
  return { likePost, status };
};

export default useLikePost;
