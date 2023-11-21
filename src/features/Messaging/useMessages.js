import { useQuery } from '@tanstack/react-query'
import {getMessages} from '../../services/apiMessages'

const useMessages = (room) => {
  const {data : messages , isLoading , isError} = useQuery({
    queryKey : ['messages' , room],
    queryFn : () => getMessages(room)
  })
  return {messages , isLoading , isError}
}

export default useMessages