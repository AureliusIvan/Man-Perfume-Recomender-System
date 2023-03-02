// [ This is user Page ]
// this is import
import Header from "../../Component/StyledComponent/Header/Header"
// import CustomAlert from "../../Component/StyledComponent/CustomAlert/CustomAlert"
import Center from "../../Component/StyledComponent/CustomCenter/Center"
import { CustomBox as Box, BoxSection } from "../../Component/StyledComponent/CustomBox/CustomBox"
import { Paragraf, Text, Title } from "../../Component/StyledComponent/Typography/CustomTypography"
import CustomSlider from "../../Component/StyledComponent/CustomSlider/CustomSlider"
import { CustomButton as Button } from "../../Component/StyledComponent/CustomButton/CustomButton"
import { UserFooter } from "../../Component/StyledComponent/Footer/Footer"
// import { Tooltip } from "@mui/material"
import { useEffect, useState } from "react"
import { get } from "../../Component/FunctionComponent/axiosClient/axiosClient"
import style from "./UserPage.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { selectData, selectPrivilage, selectToken, selectIsLogin } from "../../Redux/feature/dataSlice"
import { setUserToken, setLogin, setLogout } from "../../Redux/feature/dataSlice"
import LoadingScreen from "../../Component/StyledComponent/Fallback/LoadingScreen"
import { Custommotion as M } from "../../Component/StyledComponent/CustomAnimation/Custommotion"
import { Helmet } from "react-helmet-async"
import { PROJDESC, PROJTITLE, PROJDOMAIN, MainTitle } from "./../../data"
import Tutorial from "./Tutorial/Tutorial"
import Recommendation from "./Recommendation/Recommendation"
import WelcomePage from "./Welcome/Welcome"
import DescPage from "./Desc/DescPage"
import Spacer from "./Spacer/spacer"
import { CustomInput } from "../../Component/StyledComponent/CustomInput/CustomInput"


// main function
export default function UserPage() {
    let i = 5;
    const [loading, setLoading] = useState<boolean>(false);
    const islogin = useSelector(selectIsLogin);

    return (
        <div id="User-Page" className={style.UserPage}>
            {/* Helmet for SEO */}
            <Helmet>
                <title> HOME | {PROJTITLE}</title>
                <meta name="description" content={PROJDESC} />
                <link rel="canonical" href={`${PROJDOMAIN}`} />
            </Helmet>
            <Header />{/*Include header on outlet if router done  */}
            <Spacer y={"100px"} />
            {/* example of paragraf component */}
            {/* Example of using dispatch */}

            {/* Content Start here */}
            <WelcomePage />
            {/* <Paragraf
                title={"HELLO WORLD"}>
                Test
            </Paragraf> */}
            <Spacer y={"200px"} />


            <Center>
                {/* Starter pack survey form, hope this help! */}
                <Box>
                    <M>
                        <Title>
                            {MainTitle}
                        </Title>
                    </M>
                    {Array(i).fill(0).map((_, index) => {
                        return (
                            <BoxSection key={index}>
                                <Text>
                                </Text>
                                <CustomSlider />
                            </BoxSection>)
                    })}
                    <Button>
                        Submit
                    </Button>
                </Box>
                <Spacer y={"100px"} />
                <Box>
                    <CustomInput label="test" />
                    <CustomInput />
                </Box>
                <Spacer y={"100px"} />
                <Tutorial />
                <Spacer y={"100px"} />
                <DescPage />
            </Center>
            <Spacer y={"100px"} />
            {/* nanti bakal dipindahin ke login */}

            <Recommendation />
            {/* <UserFooter /> */}
        </div>
    )
}


// note that the theme is not working on the modal, i don't know why