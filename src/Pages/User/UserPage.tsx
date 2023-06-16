// [ This is user Page ]
// this is import
import React, { useEffect, lazy, Suspense } from "react"
import Center from "../../Component/StyledComponent/CustomCenter/Center"
import style from "./UserPage.module.scss"
import { Helmet } from "react-helmet-async"
import { PROJDOMAIN } from "./../../data"
// import Tutorial from "./Tutorial/Tutorial"
// import Recommendation from "./Recommendation/Recommendation"
import WelcomePage from "./Welcome/Welcome"
// import DescPage from "./Desc/DescPage"
import Spacer from "./Spacer/spacer"
// import Footer from "@/Component/StyledComponent/Footer/Footer"
import LoadingScreen from "@/Component/StyledComponent/Fallback/LoadingScreen"
import Background from "@/Component/StyledComponent/Background/Background"

import { useTranslation } from "react-i18next"

const DescPage = lazy(() => import("./Desc/DescPage"));
const Footer = lazy(() => import("@/Component/StyledComponent/Footer/Footer"));
const Tutorial = lazy(() => import("./Tutorial/Tutorial"));
const Recommendation = lazy(() => import("./Recommendation/Recommendation"));

// main function
export default function UserPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const { t } = useTranslation();
    return (
        <div id="User-Page" className={style.UserPage}>
            {/* Helmet for SEO */}
            <Helmet>
                <title> HOME | {t("PROJTITLE")}</title>
                <meta name="description" content={t("PROJDESC")} />
                <link rel="canonical" href={`${PROJDOMAIN}`} />
            </Helmet>
            <Background />
            <Spacer y={"100px"} />
            <WelcomePage />
            <section id="desc">
                <Center>
                    <Suspense fallback={<LoadingScreen />}>
                        <DescPage />
                    </Suspense>
                    <Spacer y={"100px"} />
                    <Spacer y={"100px"} />
                    <Tutorial />
                    <Spacer y={"100px"} />
                </Center>
            </section>
            <Spacer y={"100px"} />
            <Suspense fallback={<LoadingScreen />}>
                <Recommendation />
            </Suspense>
            <Suspense fallback={<LoadingScreen />}>
                <Footer />
            </Suspense>
        </div >
    )
}


// note that the theme is not working on the modal, i don't know why