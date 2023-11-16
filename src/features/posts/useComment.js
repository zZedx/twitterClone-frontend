import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment as createCommentApi } from "../../services/apiPosts";
import toast from "react-hot-toast";

const useComment = () => {
  const queryClient = useQueryClient();
  const { mutate: createComment, status } = useMutation({
    mutationFn: ({ body, image, postId }) =>
      createCommentApi(body, image, postId),
    onSuccess: (data , variables) => {
      const { postId } = variables;
      console.log(postId)
      toast.success("Comment created");
      queryClient.invalidateQueries({ queryKey: [`post-${postId}`] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });
  return { createComment, status };
};

export default useComment;
