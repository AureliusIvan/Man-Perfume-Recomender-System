import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// User
import UserPage from "@/Pages/User/UserPage";

// Admin
// import AdminPage from "@/Pages/Admin/AdminPage";
// import LoginPage from "@/Pages/Admin/Login/LoginPage";

// import Kuisioner from "@/Pages/User/Kuisioner/Kuisioner";
import { lazy, Suspense } from "react";
import LoadingScreen from "../StyledComponent/Fallback/LoadingScreen";
import Result from "@/Pages/User/Result/Result";

import ProtectedRoute from "./ProtectedRoute";

// import { useSelector } from "react-redux";
// import { selectIsLogin } from "@/Redux/feature/dataSlice";

const LoginPage = lazy(() => import("@/Pages/Admin/Login/LoginPage"));
const AdminPage = lazy(() => import("@/Pages/Admin/AdminPage"));
// const UserPage = lazy(() => import("@/Pages/User/UserPage"));
const Kuisioner = lazy(() => import("@/Pages/User/Kuisioner/Kuisioner"));

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
      <Route
        path="/start"
        element={
          <Suspense fallback={<LoadingScreen />}>
            <Kuisioner />
          </Suspense>
        }
      />
      <Route
        path="result"
        element={
          <Suspense fallback={<LoadingScreen />}>
            <Result />
          </Suspense>
        }
      />
      <Route path="/admin/" element={
        <ProtectedRoute>
          <AdminPage />
        </ProtectedRoute>}>

      </Route>
      <Route path="/admin/login" element={
        <Suspense fallback={<LoadingScreen />}>
          <LoginPage />
        </Suspense>
      } />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Routing;

// user = get user state
// if user == admin
// return children if condition true
// else return navigate ./login
