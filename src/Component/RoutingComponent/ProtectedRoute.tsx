import React, { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsLogin, selectprivilege } from "@/Redux/feature/dataSlice";
import { Navigate, Route } from "react-router-dom";

interface Props {
  element?: ReactNode;
  path: string;
}

const ProtectedRoute = ({ children }: { children?: ReactNode }) => {
    const auth = useSelector(selectprivilege);
    useEffect(() => {
        console.log(auth);
    }, [auth])
    return auth === "admin" ?
        <>{children}</>
        :
        <Navigate to="/admin/login" />
}

export default ProtectedRoute;
