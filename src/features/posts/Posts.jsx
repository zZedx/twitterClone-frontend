import usePosts from './usePosts'

const Posts = () => {
    const {posts , isError , isLoading} = usePosts()

    if(isLoading) return <div>Loading...</div>
    console.log(posts)
  return (
    <div>Posts</div>
  )
}

export default Posts