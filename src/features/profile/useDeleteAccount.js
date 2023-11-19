import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteAccount as deleteAccountApi } from "../../services/apiUsers"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const useDeleteAccount = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
   const {mutate : deleteAccount , status} = useMutation({
        mutationFn: deleteAccountApi,
        onSuccess: () => {
            queryClient.invalidateQueries('user')
            queryClient.invalidateQueries('profile')
            toast.success('Account deleted')
            queryClient.clear()
            navigate('/login')
        },
        onError: (error) => {
            toast.error(error.message)
        }
   })
    return {deleteAccount , status}
}

export default useDeleteAccount