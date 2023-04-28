import { Routes, Route, Navigate } from "react-router-dom";

// User
import UserPage from "@/Pages/User/UserPage";

// Admin
import AdminPage from "@/Pages/Admin/AdminPage";
import LoginPage from "@/Pages/Admin/Login/LoginPage";

// import Kuisioner from "@/Pages/User/Kuisioner/Kuisioner";
import { lazy, Suspense } from "react";
import LoadingScreen from "../StyledComponent/Fallback/LoadingScreen";
import Result from "@/Pages/User/Result/Result";

import ProtectedRoute from "./ProtectedRoute";

import { useSelector } from "react-redux";
import { selectIsLogin } from "@/Redux/feature/dataSlice";

const Kuisioner = lazy(() => import("@/Pages/User/Kuisioner/Kuisioner"));

const Routing = () => {
  const auth = useSelector(selectIsLogin);

  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
      <Route path="/admin/login" element={<LoginPage />} />
      
      {/* Temporary back door */}
      <Route path="/admint" element={<AdminPage />} />
      
      {/* Setelah login, kalo misal ke home, terus manual ke /admin, dia malah balik ke halaman login (kyk langsung logged out of the account) */}
      <Route path="/admin" element={
        // yang mau di protect tinggal di bungkus aja
        // nanti bisa di tambahin parameter lagi kalo butuh sih, semisal admin, user dll
        <ProtectedRoute>
          <AdminPage />
        </ProtectedRoute>
      } />
      <Route
        path="/start"
        element={
          <Suspense fallback={<LoadingScreen />}>
            <Kuisioner />
          </Suspense>
        }
      />
      <Route
        path="/result"
        element={
          <Suspense fallback={<LoadingScreen />}>
            <Result />
          </Suspense>
        }
      />

      {/* To redirect any unavailable routes back to home page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Routing;

// user = get user state
// if user == admin
// return children if condition true
// else return navigate ./login
