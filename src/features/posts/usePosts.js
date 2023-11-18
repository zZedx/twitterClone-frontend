import { useQuery } from "@tanstack/react-query"
import { getAllPosts } from "../../services/apiPosts"

const usePosts = (filter) => {
  const {data : posts , isError , isLoading} = useQuery({
    queryKey : ["posts" , filter],
    queryFn : ()=>getAllPosts(filter)
  })
  return {posts , isError , isLoading}
}

export default usePosts