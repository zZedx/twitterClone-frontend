import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likePost as likePostApi} from "../../services/apiPosts";

const useLikePost = () => {
  const queryClient = useQueryClient();
  const { mutate: likePost, status } = useMutation({
    mutationFn: (id) => likePostApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });
  return { likePost, status };
};

export default useLikePost;
