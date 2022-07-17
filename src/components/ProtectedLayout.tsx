import { Link, Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../context/useContext";
// import { AppBar } from "./AppBar";

const ProtectedLayout = () => {
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

export default ProtectedLayout
