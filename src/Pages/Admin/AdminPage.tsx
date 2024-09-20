import React, {lazy, Suspense} from "react";
import style from "./AdminPage.module.scss";
import LoadingScreen from "../../Component/StyledComponent/Fallback/LoadingScreen";
import {Title} from "@/Component/StyledComponent/Typography/CustomTypography";
import Center from "@/Component/StyledComponent/CustomCenter/Center";
import Spacer from "../User/Spacer/spacer";
import AddMenu from "@/Component/StyledComponent/CustomFormik/NewFormik/AddMenu";

import {useTranslation} from "react-i18next"

const Table = lazy(() => import("../../Component/StyledComponent/CustomTable/CustomTable"))

function AdminPage() {
  const {t} = useTranslation();

  return (
      <div className={style.AdminPage}>
        <Center>
          <Spacer y={"20px"}/>
          <Title>
            {t("adminPage")}
          </Title>
          <Spacer y={"20px"}/>
        </Center>
        <Suspense fallback={<LoadingScreen/>}>
          <AddMenu/>
          <Spacer y={"20px"}/>
          <Center>
            <Table/>
          </Center>
        </Suspense>
      </div>
  )
}

export default AdminPage