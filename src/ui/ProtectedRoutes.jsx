import { useNavigate } from "react-router-dom";
import useUser from "../features/user/useUser";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { user, isLoading } = useUser();

  if (!isLoading && !user) navigate("/login" , { replace: true });

  if (isLoading) return null;
  return children;
};

export default ProtectedRoutes;
