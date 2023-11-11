import { useMutation } from "@tanstack/react-query"
import {useNavigate} from "react-router-dom"
import { login as loginApi} from "../../services/apiAuth"
import toast from "react-hot-toast"

const useLogin = () => {
    const navigate = useNavigate()
    const { mutate : login, status} = useMutation({
        mutationFn: ({ username, password }) => loginApi(username, password),
        onSuccess: () => {
            navigate("/home" , {replace : true})
        },
        onError: (e) => toast.error(e.message)
    })

    return {login , status}
}

export default useLogin