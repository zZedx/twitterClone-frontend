import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost as createPostApi } from "../../services/apiPosts";
import toast from "react-hot-toast";

const useCreatePost = () => {
  const queryClient = useQueryClient();
  const { mutate: createPost, status } = useMutation({
    mutationFn: ({ body }) => createPostApi(body),
    onSuccess: () => {
      toast.success("Post created");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });
  return { createPost, status };
};

export default useCreatePost;
