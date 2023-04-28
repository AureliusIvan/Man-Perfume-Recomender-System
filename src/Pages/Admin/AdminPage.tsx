// import CustomTable from "../../Component/StyledComponent/CustomTable/CustomTable";
import React, { lazy, Suspense } from "react";
import style from "./AdminPage.module.scss";
import LoadingScreen from "../../Component/StyledComponent/Fallback/LoadingScreen";
import { Text, Title } from "@/Component/StyledComponent/Typography/CustomTypography";
import Center from "@/Component/StyledComponent/CustomCenter/Center";
import Spacer from "../User/Spacer/spacer";
import { CustomModal } from "@/Component/StyledComponent/CustomModal/CustomModal";

import CustomFormik from "@/Component/StyledComponent/CustomFormik/CustomFormik";

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
                <CustomModal title="Add New Perfume">
                    <CustomFormik
                        formName="newPerfume"
                        onSubmit={() => {
                            console.log(" submitted!");
                        // how to close modal from outside its component?
                        }}
                    />
                </CustomModal>
                <Spacer y={"20px"} />
                <Center>
                    <Table />
                </Center>
            </Suspense>
        </div>
    )
}

export default AdminPage