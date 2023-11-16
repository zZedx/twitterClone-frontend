import { useQuery } from "@tanstack/react-query";
import { getAllPostComments } from "../../services/apiPosts";
import { useParams } from "react-router-dom";

const usePostComments = () => {
  const { postId } = useParams();
  const {
    data: comments,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: () => getAllPostComments(postId),
  });
  return { comments, isLoading, isError };
};

export default usePostComments;
