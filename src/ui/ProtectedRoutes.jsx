import { useNavigate } from "react-router-dom";
import useUser from "../features/user/useUser";

import { createContext, useContext } from "react";

const UserContext = createContext();

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { user, isLoading } = useUser();

  if (!isLoading && !user) navigate("/login", { replace: true });

  if (isLoading) return null;
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

function useCurrentUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useCurrentUser must be used within an AuthProvider");
  }
  return context;
}

export { useCurrentUser };
export default ProtectedRoutes;
