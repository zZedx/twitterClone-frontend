import { useMutation, useQueryClient } from "@tanstack/react-query"
import {useNavigate} from "react-router-dom"
import { logout as logoutApi} from "../../services/apiAuth"
import toast from "react-hot-toast"

const useLogout = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { mutate : logout, status} = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            queryClient.removeQueries("user")
            navigate("/login" , {replace : true})
        },
        onError: (e) => toast.error(e.message)
    })

    return {logout , status}
}

export default useLogout