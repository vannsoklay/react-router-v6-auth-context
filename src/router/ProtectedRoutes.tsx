import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../context/useContext";

const ProtectedRoutes = () => {
  const { user }: any = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      {outlet}
    </div>
  );
};

export default ProtectedRoutes;
