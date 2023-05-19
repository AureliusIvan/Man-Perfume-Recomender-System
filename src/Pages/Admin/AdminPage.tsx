// import CustomTable from "../../Component/StyledComponent/CustomTable/CustomTable";
import React, { lazy, Suspense } from "react";
import style from "./AdminPage.module.scss";
import LoadingScreen from "../../Component/StyledComponent/Fallback/LoadingScreen";
import { Title } from "@/Component/StyledComponent/Typography/CustomTypography";
import Center from "@/Component/StyledComponent/CustomCenter/Center";
import Spacer from "../User/Spacer/spacer";
import { CustomModal } from "@/Component/StyledComponent/CustomModal/CustomModal";

const Table = lazy(() => import("../../Component/StyledComponent/CustomTable/CustomTable"))

function AdminPage() {
    return (
        <div className={style.AdminPage}>
            <Center>
                <Spacer y={"20px"} />
                <Title>
                    Admin Page
                </Title>
                <Spacer y={"20px"} />
            </Center>
            <Suspense fallback={<LoadingScreen />}>
                <CustomModal
                    xbutton
                    children
                    useFormik
                    formName="perfume"
                    title="Add new perfume"
                    editornew="new"
                />
                <Spacer y={"20px"} />
                <Center>
                    <Table />
                </Center>
            </Suspense>
        </div>
    )
}

export default AdminPage