import { useNavigate } from "react-router-dom";
import useUser from "../features/user/useUser";
import ServerStatus from "./ServerStatus";

import { createContext, useContext, useEffect } from "react";
import Spinner from "./Spinner";

const UserContext = createContext();

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user , navigate]);
  
  if (!isLoading && !user) navigate("/login", { replace: true });

  if (isLoading)
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <ServerStatus />
        <Spinner />
      </div>
    );
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
