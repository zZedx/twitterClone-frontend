import { useQuery } from '@tanstack/react-query'
import { getSuggestedUsers } from '../../services/apiUsers'

const useSuggestedUsers = () => {
  const { data: suggestedUsers, isLoading , isError} = useQuery({
    queryKey: ['suggestedUsers'],
    queryFn: getSuggestedUsers,
  })
  return { suggestedUsers, isLoading, isError }
}

export default useSuggestedUsers