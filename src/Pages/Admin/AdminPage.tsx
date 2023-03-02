// import CustomTable from "../../Component/StyledComponent/CustomTable/CustomTable";
import React, { lazy, Suspense } from "react";
import style from "./AdminPage.module.scss";
import LoadingScreen from "../../Component/StyledComponent/Fallback/LoadingScreen";
const Lazytable = lazy(() => import("../../Component/StyledComponent/CustomTable/CustomTable"))

function AdminPage() {
    return (
        <div className={style.AdminPage}>
            <Suspense fallback={<LoadingScreen />}>
                <Lazytable />
            </Suspense>
        </div>
    )
}

export default AdminPage