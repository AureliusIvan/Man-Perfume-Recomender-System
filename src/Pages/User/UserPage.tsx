// [ This is user Page ]
// this is import
import React,{ useEffect } from "react"
import Center from "../../Component/StyledComponent/CustomCenter/Center"
import style from "./UserPage.module.scss"
import { Helmet } from "react-helmet-async"
import { PROJDESC, PROJTITLE, PROJDOMAIN } from "./../../data"
import Tutorial from "./Tutorial/Tutorial"
import Recommendation from "./Recommendation/Recommendation"
import WelcomePage from "./Welcome/Welcome"
import DescPage from "./Desc/DescPage"
import Spacer from "./Spacer/spacer"
import Footer from "@/Component/StyledComponent/Footer/Footer"

// main function
export default function UserPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div id="User-Page" className={style.UserPage}>
            {/* Helmet for SEO */}
            <Helmet>
                <title> HOME | {PROJTITLE}</title>
                <meta name="description" content={PROJDESC} />
                <link rel="canonical" href={`${PROJDOMAIN}`} />
            </Helmet>
            <Spacer y={"100px"} />
            <WelcomePage />
            <Spacer y={"200px"} />
            <Center>
                <DescPage />
                <Spacer y={"100px"} />
                <Spacer y={"100px"} />
                <Tutorial />
                <Spacer y={"100px"} />
            </Center>
            <Spacer y={"100px"} />
            <Recommendation />
            <Footer />
        </div >
    )
}


// note that the theme is not working on the modal, i don't know why