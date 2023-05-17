import style from "./Kuisioner.module.scss";
import Center from "@/Component/StyledComponent/CustomCenter/Center";
import { CustomBox as Box } from "@/Component/StyledComponent/CustomBox/CustomBox";
import { Title } from "@/Component/StyledComponent/Typography/CustomTypography";
import { BoxSection } from "@/Component/StyledComponent/CustomBox/CustomBox";
import Grid from "@mui/material/Grid";
import { Text } from "@/Component/StyledComponent/Typography/CustomTypography";
import { MainTitle } from "@/data";
import CustomSlider from "@/Component/StyledComponent/CustomSlider/CustomSlider";
import { CustomButton as Button, CustomButton, CustomButtonPlain } from "@/Component/StyledComponent/CustomButton/CustomButton";
import { Custommotion as M } from "@/Component/StyledComponent/CustomAnimation/Custommotion";
import { useNavigate } from "react-router-dom";
import Spacer from "../Spacer/spacer";
import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { KuisionerData as question } from "./KuisionerData";
import styled from '@emotion/styled';
import { Formik } from "formik";
import { post } from "@/Component/FunctionComponent/axiosClient/axiosClient";
import CustomAlert from "@/Component/StyledComponent/CustomAlert/CustomAlert";
import { Confirmations } from "@/Component/StyledComponent/CustomModal/CustomModal";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import HelpComponent from "@/Component/StyledComponent/HelpComponent/HelpComponent";
import { useDispatch, useSelector } from "react-redux";
import { selectDataEntry } from "@/Redux/feature/dataSlice";
import { setDataEntry } from "@/Redux/feature/dataSlice";


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



// 
function valueLabelFormat(value: number) {
    switch (value) {
        case 0:
            // return 'Sangat Penting';
            return '3';
        case 1:
            // return 'Penting';
            return '2';
        case 2:
            // return 'Agak Penting';
            return '1';
        case 3:
            // return 'Agak Tidak Penting';
            return '0';
        case 4:
            // return 'Tidak Penting';
            return '1';
        case 5:
            // return 'Sangat Tidak Penting';
            return '2';
        case 6:
            return '3';
        default:
        // return 'Unknown';

    }
}


function calculateValue(value: number) {
    return value;
}

export default function Kuisioner() {
    const [value, setValue] = useState<number>(10);
    const handleChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
    };
    const selectData = useSelector(selectDataEntry);
    const dispatch = useDispatch();

    const navigate = useNavigate()
    const isMobile = useMediaQuery('(max-width:600px)');
    const navigateToResult = () => {
        navigate('/result')
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        const unloadCallback = (event: any) => {
            event.preventDefault();
            event.returnValue = "";
            return "";
        };
        window.addEventListener("beforeunload", unloadCallback);
        return () => window.removeEventListener("beforeunload", unloadCallback);
    }, []);


    return (
        <div>
            <Formik
                // validationSchema={ }
                initialValues={{
                    input: [4, 4, 4, 4, 4, 4],
                }}
                onSubmit={(values: any) => {
                    console.log(values.input);
                    const formData = new FormData();
                    // formData = [...values.input];
                    values.input.forEach((value: any, index: any) => {
                        formData.append(`input[${index}]`, value);
                    });
                    async function Submit() {
                        // console.log(formData.get("input[0]"));
                        try {
                            post("v1/calculate", formData).then((res: any) => {
                                console.log(res);
                                navigateToResult();
                                if (res.status === 200) {
                                    dispatch(setDataEntry(res.data));
                                }
                            }).catch((err) => {
                                console.log(err);
                            })
                        } catch {
                            console.log("error");
                        }
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
                                <Box
                                // overflow={"visible"}
                                >
                                    <Spacer y={"20px"} />
                                    <M>
                                        <Title textalign={"center"}>
                                            {MainTitle}
                                        </Title>
                                        <HelpComponent />
                                    </M>
                                    <Spacer y={"20px"} />
                                    <Text fontWeight={"bold"} textalign={"center"}>Mana yang lebih penting bagi anda dalam memilih parfum?</Text>
                                    <Spacer y={"20px"} />
                                    {question.map((_, index) => {
                                        return (
                                            <BoxSection key={index} paddingBottom={"0"}>
                                                <Grid container spacing={2} key={index} sx={{
                                                    '&.MuiGrid-container': {
                                                        paddingBottom: isMobile ? "0px" : "10px",
                                                        marginBottom: isMobile ? "0px" : "10px",
                                                    }
                                                }}>
                                                    {/* <Text fontWeight={"bold"}>{question[index].question}</Text> */}
                                                    <Grid item xs={6} sm={3} md={2} xl={1} sx={{
                                                        '&.MuiGrid-item': {
                                                            textAlign: "left",
                                                            padding: "0px",
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            justifyContent: "flex-start",
                                                            // alignItems: "start",
                                                            margin: "0px",
                                                        }
                                                    }}>
                                                        <Tooltip title={question[index].paramleftdesc} placement="top">
                                                            <CustomButtonPlain textalign={isMobile ? "left" : "center"}>
                                                                {question[index].paramleft}
                                                            </CustomButtonPlain>
                                                        </Tooltip>
                                                    </Grid>
                                                    {!isMobile ?
                                                        <CustomGrid item xs={6} sm={6} md={8} xl={10}
                                                            sx={{
                                                                '&.MuiGrid-item': {
                                                                    textAlign: "right",
                                                                    padding: "0px",
                                                                    margin: "0px",
                                                                    display: "flex",
                                                                    justifyContent: "flex-start",
                                                                    alignItems: "start",
                                                                }
                                                            }}
                                                        >
                                                            <CustomSlider
                                                                defaultValue={4}
                                                                name={`input.${index}`}
                                                                // value={values.input[index]}
                                                                onChange={handleChange}
                                                                scale={calculateValue}
                                                                getAriaValueText={valueLabelFormat}
                                                                valueLabelFormat={valueLabelFormat}
                                                            />
                                                        </CustomGrid>
                                                        : ""}
                                                    <Grid item xs={6} sm={3} md={2} xl={1} sx={{
                                                        '&.MuiGrid-item': {
                                                            textAlign: "left",
                                                            padding: "0px",
                                                        }
                                                    }}>
                                                        <Tooltip title={question[index].paramrightdesc} placement="top">
                                                            <CustomButtonPlain textalign={isMobile ? "right" : "center"}>
                                                                {question[index].paramright}
                                                            </CustomButtonPlain>
                                                        </Tooltip>
                                                    </Grid>
                                                    {isMobile ?
                                                        <CustomGrid item xs={12} sm={12} md={12} xl={12} sx={{
                                                            '&.MuiGrid-item': {
                                                                padding: "0px",
                                                            }
                                                        }}>
                                                            <CustomSlider
                                                                defaultValue={4}
                                                                onChange={handleChange}
                                                                scale={calculateValue}
                                                                getAriaValueText={valueLabelFormat}
                                                                valueLabelFormat={valueLabelFormat} />
                                                        </CustomGrid>
                                                        : ""}
                                                </Grid>
                                                <Spacer y={"20px"} />
                                            </BoxSection>
                                        )
                                    })}
                                    <Confirmations onConfirm={handleSubmit} />
                                    {/* <Button type="submit">
                                        Submit
                                    </Button> */}
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