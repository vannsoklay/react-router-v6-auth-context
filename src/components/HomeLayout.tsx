import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../context/useContext";
// import { AppBar } from "./AppBar";

const HomeLayout = () => {
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


export default HomeLayout;