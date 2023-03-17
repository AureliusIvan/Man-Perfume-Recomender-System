import { Routes, Route } from "react-router-dom";

// User
import UserPage from "@/Pages/User/UserPage";

// Admin
import AdminPage from "@/Pages/Admin/AdminPage";
import LoginPage from "@/Pages/User/Login/LoginPage";
// import Kuisioner from "@/Pages/User/Kuisioner/Kuisioner";
import { lazy, Suspense } from "react";
import LoadingScreen from "../StyledComponent/Fallback/LoadingScreen";
import Result from "@/Pages/User/Result/Result";
const Kuisioner = lazy(() => import("@/Pages/User/Kuisioner/Kuisioner"));

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<UserPage />} />

        <Route path="/admin" element={<AdminPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/start" element={
        <Suspense fallback={<LoadingScreen />}>
          <Kuisioner />
        </Suspense>}
      />
      
      <Route path="/result" element={
        <Suspense fallback={<LoadingScreen />}>
          <Result />
        </Suspense>}
      />
    </Routes>
  );
};

export default Routing;



// user = get user state 
// if user == admin
// return children if condition true
// else return navigate ./login