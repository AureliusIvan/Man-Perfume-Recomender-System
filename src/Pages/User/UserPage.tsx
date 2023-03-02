// [ This is user Page ]
// this is import
import Header from "../../Component/StyledComponent/Header/Header"
// import CustomAlert from "../../Component/StyledComponent/CustomAlert/CustomAlert"
import Center from "../../Component/StyledComponent/CustomCenter/Center"
import { CustomBox as Box, BoxSection } from "../../Component/StyledComponent/CustomBox/CustomBox"
import { Text, Title } from "../../Component/StyledComponent/Typography/CustomTypography"
import CustomSlider from "../../Component/StyledComponent/CustomSlider/CustomSlider"
import { CustomButton as Button } from "../../Component/StyledComponent/CustomButton/CustomButton"
import CustomCard from "../../Component/StyledComponent/CustomCard/CustomCard"
import { UserFooter } from "../../Component/StyledComponent/Footer/Footer"
import { Toogle } from "../../App/App"
import CustomInput from "../../Component/StyledComponent/CustomInput/CustomInput"
import { Confirmations, CustomModal as Modal } from "../../Component/StyledComponent/CustomModal/CustomModal"
import { CustomRating as Rating } from "../../Component/StyledComponent/Rating/Rating"
// import { Tooltip } from "@mui/material"
import { useEffect, useState } from "react"
import { get } from "../../Component/FunctionComponent/axiosClient/axiosClient"
import style from "./UserPage.module.scss"
// 
import { useDispatch, useSelector } from "react-redux"
import { setUserToken } from "../../Redux/feature/dataSlice"

// main function
export default function UserPage() {
    let i = 5;
    const [naruto, setNaruto] = useState<object[]>([])
    useEffect(() => {
        try {
            get("").then((res: any) => {
                console.log(res.data);
                setNaruto(res.data)
            })
        }
        catch (err) {
            console.log(err)
        }
    }, [])

    //  
    const dispatch = useDispatch();
    const token = useSelector((state: any) => state.user.token);

    return (
        <div id="User-Page" className={style.UserPage}>
            <Header />

            <Button onClick={() => { dispatch(setUserToken("token")) }}>Token : {token}
            </Button>
            <Center>
                {/* Starter pack survey form, hope this help! */}
                <Box>
                    <Title>
                        Tentukan Prioritas Anda Dalam Menentukan Parfum Pria Terbaik
                    </Title>
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
                {/*  */}

                {/* Starter pack module form, hope this help! */}
                <Box>
                    <CustomInput label="Username" />
                    <CustomInput label="Password" />
                    {/* <Modal /> */}
                    <Confirmations title="Submit" />
                    {/* <Tooltip title="Rate your Experience!"> */}
                    <Rating />
                    {/* </Tooltip> */}
                </Box>
                {/* end here */}

                {/* Below is for generating perfume card later */}
                <CustomCard />
                {/* Axios testing with naruto API */}
                {naruto.map((item: any, index) => {
                    return (
                        <CustomCard
                            title={item.name}
                            image={item.images[0]}
                            key={index} />
                    )
                })}
            </Center>
            <UserFooter />
        </div>
    )
}


// note that the theme is not working on the modal, i don't know why