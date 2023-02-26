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
import { Tooltip } from "@mui/material"
import { useEffect, useState } from "react"
import { get } from "../../Component/FunctionComponent/axiosClient/axiosClient"
import style from "./UserPage.module.scss"

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
    return (
        <div id="User-Page" className={style.UserPage}>
            <Header />
            <Center>
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
                {naruto.map((item: any, index) => {
                    return (
                        <CustomCard
                            title={item.name}
                            image={item.images[0]}
                            key={index} />
                    )
                })
                }
                {/* <CustomCard /> */}
                <Box>
                    <CustomInput />
                    {/* <Modal /> */}
                    <Confirmations />
                    {/* <Tooltip title="Rate your Experience!"> */}
                    <Rating />
                    {/* </Tooltip> */}
                </Box>
            </Center>
            <UserFooter />
        </div>
    )
}