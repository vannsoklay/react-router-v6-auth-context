import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../context/useContext";

const AuthRoutes = () => {
  const { user }: any = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/dashboard/profile" replace />;
  }

  return (
    <div>
      {outlet}
    </div>
  );
};


export default AuthRoutes;