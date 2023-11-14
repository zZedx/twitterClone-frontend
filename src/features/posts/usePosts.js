import { useQuery } from "@tanstack/react-query"
import { getAllPosts } from "../../services/apiPosts"

const usePosts = () => {
  const {data : posts , isError , isLoading} = useQuery({
    queryKey : ["posts"],
    queryFn : getAllPosts
  })
  return {posts , isError , isLoading}
}

export default usePosts