// [ This is user Page ]
// this is import

// import CustomAlert from "../../Component/StyledComponent/CustomAlert/CustomAlert"
import Center from "../../Component/StyledComponent/CustomCenter/Center"
import { CustomBox as Box, BoxSection } from "../../Component/StyledComponent/CustomBox/CustomBox"
import { Paragraf, Text, Title } from "../../Component/StyledComponent/Typography/CustomTypography"
import CustomSlider from "../../Component/StyledComponent/CustomSlider/CustomSlider"
import { CustomButton as Button } from "../../Component/StyledComponent/CustomButton/CustomButton"
import style from "./UserPage.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { selectData, selectPrivilage, selectToken, selectIsLogin } from "../../Redux/feature/dataSlice"
import { Custommotion, Custommotion as M } from "../../Component/StyledComponent/CustomAnimation/Custommotion"
import { Helmet } from "react-helmet-async"
import { PROJDESC, PROJTITLE, PROJDOMAIN, MainTitle } from "./../../data"
import Tutorial from "./Tutorial/Tutorial"
import Recommendation from "./Recommendation/Recommendation"
import WelcomePage from "./Welcome/Welcome"
import DescPage from "./Desc/DescPage"
import Spacer from "./Spacer/spacer"
import { CustomInput } from "../../Component/StyledComponent/CustomInput/CustomInput"
import { Grid } from "@material-ui/core"
import { useMemo } from "react"
// main function
export default function UserPage() {
    let i = 5;
    const islogin = useSelector(selectIsLogin);

    return (
        <div id="User-Page" className={style.UserPage}>
            {/* Helmet for SEO */}
            <Helmet>
                <title> HOME | {PROJTITLE}</title>
                <meta name="description" content={PROJDESC} />
                <link rel="canonical" href={`${PROJDOMAIN}`} />
            </Helmet>
            <Spacer y={"100px"} />
            {/* example of paragraf component */}
            {/* Example of using dispatch */}

            {/* Content Start here */}
            <M>
                <WelcomePage />
            </M>
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
        </div >
    )
}


// note that the theme is not working on the modal, i don't know why