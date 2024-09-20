import React, {lazy, Suspense, useEffect} from "react";
import Center from "../../Component/StyledComponent/CustomCenter/Center";
import style from "./UserPage.module.scss";
import {Helmet} from "react-helmet-async";
import {PROJDOMAIN} from "@/data";
import WelcomePage from "./Welcome/Welcome";
import Spacer from "./Spacer/spacer";
import LoadingScreen from "@/Component/StyledComponent/Fallback/LoadingScreen";
import Background from "@/Component/StyledComponent/Background/Background";
import {useTranslation} from "react-i18next";
import ProductSection from "./Recommendation/ProductSection";

const DescPage = lazy(() => import("./Desc/DescPage"));
const Footer = lazy(() => import("@/Component/StyledComponent/Footer/Footer"));
const Tutorial = lazy(() => import("./Tutorial/Tutorial"));

export default function UserPage() {
  const {t} = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
      <>
        <Helmet>
          <title> HOME | {t("PROJTITLE")}</title>
          <meta name="description" content={t("PROJDESC")}/>
          <link rel="canonical" href={`${PROJDOMAIN}`}/>
        </Helmet>

        <section id="User-Page" className={style.UserPage}>
          <Background/>
          <Spacer y={"100px"}/>
          <WelcomePage/>
          <section id="desc">
            <Center>
              <DescPage/>
              <Spacer y={"100px"}/>
              <Tutorial/>
            </Center>
          </section>
          <Suspense fallback={<LoadingScreen/>}>
            <ProductSection/>
          </Suspense>
          <Suspense fallback={<LoadingScreen/>}>
            <Footer/>
          </Suspense>
        </section>
      </>
  );
}