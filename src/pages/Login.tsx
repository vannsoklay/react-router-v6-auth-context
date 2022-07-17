import { useAuth } from "../context/useContext";

const Login = () => {
  const { login }: any = useAuth();

  const handleLogin = () => {
    login({
      email: "soklayvann@gmail.com",
      password: "password",
    });
  };
  return (
    <div>
      Login
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
