import { Routes, Route } from "react-router-dom";

// User
import UserPage from "@/Pages/User/UserPage";

// Admin
import AdminPage from "@/Pages/Admin/AdminPage";
import LoginPage from "@/Pages/User/Login/LoginPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default Routing;
