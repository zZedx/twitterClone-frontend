import { useQuery } from "@tanstack/react-query";
import { getPost } from "../../services/apiPosts";
import { useParams } from "react-router-dom";

const usePost = () => {
  const { postId } = useParams();
  const {
    data: post,
    isError,
    isLoading,
  } = useQuery({
    queryKey: [`post-${postId}`],
    queryFn: () => getPost(postId),
  });
  return { post, isError, isLoading };
};

export default usePost;
