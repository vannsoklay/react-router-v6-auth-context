import { Routes, Route } from "react-router-dom";

import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'
import ProfilePage from '../pages/Profile'
import SettingPage from '../pages/Setting'

import AuthRoutes from "./AuthRoutes";
import ProtectedRoutes from "./ProtectedRoutes";

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<AuthRoutes />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingPage />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
