import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectIsLogin } from "@/Redux/feature/dataSlice";
import { Navigate, Route } from "react-router-dom";


interface Props {
    element ? : ReactNode,
    path : string,
} 

const ProtectedRoute = ({path, element} : Props) => {
    const auth = useSelector(selectIsLogin)
    
    // ini ga berhasil, apa karena elementnya? engga juga...
    // kemungkinan harus langsung di file Routing (?) tapi kalo sebagai component disana juga ga berhasil..
    
    // return 1 == 1 ? ( 
    return auth ? (
        <Route path={path} element={element} />
    ) : <Route path={path} element={<Navigate to="/admin/login" replace />} />
    // ) : <Navigate to="/admin/login" />
}

export default ProtectedRoute;