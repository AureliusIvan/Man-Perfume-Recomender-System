import style from "./Kuisioner.module.scss";
import Center from "@/Component/StyledComponent/CustomCenter/Center";
import { CustomBox as Box } from "@/Component/StyledComponent/CustomBox/CustomBox";
import { Title } from "@/Component/StyledComponent/Typography/CustomTypography";
import { BoxSection } from "@/Component/StyledComponent/CustomBox/CustomBox";
import Grid from "@mui/material/Grid";
import { Text } from "@/Component/StyledComponent/Typography/CustomTypography";
import { MainTitle } from "@/data";
import CustomSlider from "@/Component/StyledComponent/CustomSlider/CustomSlider";
import { CustomButton as Button } from "@/Component/StyledComponent/CustomButton/CustomButton";
import { Custommotion as M } from "@/Component/StyledComponent/CustomAnimation/Custommotion";
import { useNavigate } from "react-router-dom";
import Spacer from "../Spacer/spacer";
import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { KuisionerData as question } from "./KuisionerData";
import styled from '@emotion/styled';
import { Formik } from "formik";

const CustomGrid = styled(Grid)({
    width: "100%",
    height: "100%",
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "normal",
    color: "#000",
    // margin
    // margin: props.margin ? props.margin : "0px",
    marginTop: "0px",
    marginBottom: "0px",
    marginLeft: "0px",
    marginRight: "0px",
    // padding
    padding: "0px",
    paddingTop: "0px",
    paddingBottom: "0px",
    paddingLeft: "0px",
    paddingRight: "0px",
})



export default function Kuisioner() {
    const navigate = useNavigate()
    const isMobile = useMediaQuery('(max-width:600px)');
    let i = 5;
    const navigateToResult = () => {
        navigate('/result')
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div>
            <Formik
                // validationSchema={ }
                initialValues={{
                }}
                onSubmit={(values) => {
                    async function Submit() {
                        navigateToResult();
                    }
                    Submit();

                }}
            >
                {({
                    values,
                    errors,
                    handleSubmit,
                    handleChange,
                }) => (
                    <div>
                        <form noValidate onSubmit={handleSubmit}>

                            <Spacer y={"20px"} />
                            <Center>
                                {/* Starter pack survey form, hope this help! */}
                                <Box>
                                    <Spacer y={"20px"} />
                                    <M>
                                        <Title textalign={"center"}>
                                            {MainTitle}
                                        </Title>
                                    </M>
                                    <Spacer y={"20px"} />
                                    <Text fontWeight={"bold"} textalign={"center"}>Mana yang lebih penting bagi anda?</Text>
                                    <Spacer y={"20px"} />
                                    {question.map((_, index) => {
                                        return (
                                            <BoxSection key={index}>
                                                <Grid container spacing={2} key={index} sx={{
                                                    '&.MuiGrid-container': {
                                                        paddingBottom: "10px",
                                                    }
                                                }}>
                                                    {/* <Text fontWeight={"bold"}>{question[index].question}</Text> */}
                                                    <Grid item xs={6} sm={3} md={2} xl={1} sx={{
                                                        '&.MuiGrid-item': {
                                                            textAlign: "left",
                                                            padding: "0px",
                                                            display: "flex",
                                                            justifyContent: "flex-start",
                                                            alignItems: "start",
                                                        }
                                                    }}>
                                                        <Text textalign={isMobile ? "left" : "center"}>
                                                            {question[index].paramleft}
                                                        </Text>
                                                    </Grid>
                                                    {!isMobile ?
                                                        <CustomGrid item xs={6} sm={6} md={8} xl={10}
                                                            sx={{
                                                                '&.MuiGrid-item': {
                                                                    textAlign: "left",
                                                                    padding: "0px",
                                                                }
                                                            }}
                                                        >
                                                            <CustomSlider />
                                                        </CustomGrid>
                                                        : ""}
                                                    <Grid item xs={6} sm={3} md={2} xl={1} sx={{
                                                        '&.MuiGrid-item': {
                                                            textAlign: "left",
                                                            padding: "0px",
                                                        }
                                                    }}>
                                                        <Text textalign={isMobile ? "right" : "center"}>
                                                            {question[index].paramright}
                                                        </Text>
                                                    </Grid>
                                                    {isMobile ?
                                                        <CustomGrid item xs={12} sm={12} md={12} xl={12} sx={{
                                                            '&.MuiGrid-item': {
                                                                padding: "0px",
                                                            }
                                                        }}>
                                                            <CustomSlider />
                                                        </CustomGrid>
                                                        : ""}
                                                </Grid>
                                                <Spacer y={"20px"} />
                                            </BoxSection>
                                        )
                                    })}

                                    <Button type="submit">
                                        Submit
                                    </Button>
                                </Box>
                            </Center>
                        </form>
                    </div>
                )
                }
            </Formik >

        </div >
    )
}
