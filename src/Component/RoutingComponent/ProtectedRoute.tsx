import React, { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsLogin, selectprivilege } from "@/Redux/feature/dataSlice";
import { Navigate, Route } from "react-router-dom";
import { getCookie } from "react-use-cookie";

interface Props {
  element?: ReactNode;
  path: string;
}

const ProtectedRoute = ({ children }: { children?: ReactNode }) => {
  const auth = getCookie("TOKEN");
  return auth ?
    <>{children}</>
    :
    <Navigate to="/admin/login" />
}

export default ProtectedRoute;
