import { useMutation, useQueryClient } from '@tanstack/react-query'
import { followUnfollowUser } from '../../services/apiUsers';
import toast from 'react-hot-toast';


const useFollowUnfollow = (username) => {
    const queryClient = useQueryClient();
    const {mutate : followUnfollow , status} = useMutation({
        mutationFn : () => followUnfollowUser(username),
        onSuccess : () => {
            queryClient.invalidateQueries(`user-${username}`);
            queryClient.invalidateQueries("user");
        },
        onError : (error) => {
            toast.error(error.message);
        }
    })
    return {followUnfollow , status}
}

export default useFollowUnfollow