// import CustomTable from "../../Component/StyledComponent/CustomTable/CustomTable";
import React, { lazy, Suspense } from "react";
import style from "./AdminPage.module.scss";
import LoadingScreen from "../../Component/StyledComponent/Fallback/LoadingScreen";
import { Title } from "@/Component/StyledComponent/Typography/CustomTypography";
import Center from "@/Component/StyledComponent/CustomCenter/Center";
import Spacer from "../User/Spacer/spacer";
const Lazytable = lazy(() => import("../../Component/StyledComponent/CustomTable/CustomTable"))

function AdminPage() {
    return (
        <div className={style.AdminPage}>
            <Center>
                <Spacer y={"20px"} />
                <Title>
                    Admin Page
                </Title>
                <Spacer y={"20px"} />
                <Suspense fallback={<LoadingScreen />}>
                    <Lazytable />
                </Suspense>
            </Center>
        </div>
    )
}

export default AdminPage