import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost as deletePostApi } from "../../services/apiPosts";
import toast from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const useDeletePost = (isComment) => {
  const location = useLocation();
  const queryClient = useQueryClient();
  const {username} = useParams()
  const navigate = useNavigate();
  const { mutate: deletePost, status } = useMutation({
    mutationFn: (id) =>deletePostApi(id),
    onSuccess: () => {
      toast.success(`${isComment ? "Comment" : "Post"} deleted`);
      if(location.pathname.includes("post") && !isComment) navigate(-1);
      queryClient.invalidateQueries("posts" , `user-${username}`);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { deletePost, status}
};

export default useDeletePost;
