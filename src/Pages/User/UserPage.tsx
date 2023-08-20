// [ This is user Page ]
// this is import
import React, { useEffect, lazy, Suspense } from "react";
import Center from "../../Component/StyledComponent/CustomCenter/Center";
import style from "./UserPage.module.scss";
import { Helmet } from "react-helmet-async";
import { PROJDOMAIN } from "./../../data";
import WelcomePage from "./Welcome/Welcome";
import Spacer from "./Spacer/spacer";

import LoadingScreen from "@/Component/StyledComponent/Fallback/LoadingScreen";
import Background from "@/Component/StyledComponent/Background/Background";

import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";
import ProductSection from "./Recommendation/ProductSection";

const DescPage = lazy(() => import("./Desc/DescPage"));
const Footer = lazy(() => import("@/Component/StyledComponent/Footer/Footer"));
const Tutorial = lazy(() => import("./Tutorial/Tutorial"));
const Recommendation = lazy(() => import("./Recommendation/Recommendation"));

// main function
export default function UserPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { t } = useTranslation();
    const mobile = useMediaQuery<boolean>("(max-width:900px)");

    return (
        <>
            <Helmet>
                <title> HOME | {t("PROJTITLE")}</title>
                <meta name="description" content={t("PROJDESC")} />
                <link rel="canonical" href={`${PROJDOMAIN}`} />
            </Helmet>
            <div id="User-Page" className={style.UserPage}>
                <Background />
                <Spacer y={"100px"} />
                <WelcomePage />
                <section id="desc">
                    <Center>
                        <DescPage />
                        <Spacer y={"100px"} />
                        <Tutorial />
                    </Center>
                </section>
                <Suspense fallback={<LoadingScreen />}>
                    <ProductSection />
                </Suspense>
                <Suspense fallback={<LoadingScreen />}>
                    <Footer />
                </Suspense>
            </div>
        </>
    );
}

// note that the theme is not working on the modal, i don't know why
