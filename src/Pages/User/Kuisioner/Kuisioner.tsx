import React from "react";
// import style from "./Kuisioner.module.scss";
import Center from "@/Component/StyledComponent/CustomCenter/Center";
import { CustomBox as Box, Flex } from "@/Component/StyledComponent/CustomBox/CustomBox";
import { Title } from "@/Component/StyledComponent/Typography/CustomTypography";
import { BoxSection } from "@/Component/StyledComponent/CustomBox/CustomBox";
import Grid from "@mui/material/Grid";
import { Text } from "@/Component/StyledComponent/Typography/CustomTypography";
import { MainTitle } from "@/data";
import CustomSlider from "@/Component/StyledComponent/CustomSlider/CustomSlider";
import { CustomButton as Button, CustomButtonPlain } from "@/Component/StyledComponent/CustomButton/CustomButton";
import { Custommotion as M } from "@/Component/StyledComponent/CustomAnimation/Custommotion";
import { useNavigate } from "react-router-dom";
import Spacer from "../Spacer/spacer";
import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { KuisionerData as question } from "./KuisionerData";
import styled from '@emotion/styled';
import { Formik } from "formik";
import { postGuest } from "@/Component/FunctionComponent/axiosClient/axiosClient";
import Alert from "@/Component/StyledComponent/CustomAlert/CustomAlert";
import { CustomModal } from "@/Component/StyledComponent/CustomModal/CustomModal";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import HelpComponent from "@/Component/StyledComponent/HelpComponent/HelpComponent";
import { useDispatch } from "react-redux";
// import { selectDataEntry, selectData } from "@/Redux/feature/dataSlice";
import { setDataEntry } from "@/Redux/feature/dataSlice";
import Typography from '@mui/material/Typography';
// import { Modal } from "@material-ui/core";
import LoadingScreen from "@/Component/StyledComponent/Fallback/LoadingScreen";
// import CustomAlert from "@/Component/StyledComponent/CustomAlert/CustomAlert";

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
        case 1:
            // return 'Sangat Penting';
            return '3';
        case 2:
            // return 'Penting';
            return '2';
        case 3:
            // return 'Agak Penting';
            return '1';
        case 4:
            // return 'Agak Tidak Penting';
            return '0';
        case 5:
            // return 'Tidak Penting';
            return '1';
        case 6:
            // return 'Sangat Tidak Penting';
            return '2';
        case 7:
            return '3';
        default:
        // return 'Unknown';

    }
}


function calculateValue(value: number) {
    return value;
}

export default function Kuisioner() {
    // const [value, setValue] = useState<number>(10);
    const [error, setError] = useState<boolean>(false);
    const [message, setMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const isMobile: boolean = useMediaQuery('(max-width:600px)');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)
    const navigateToResult = () => navigate('/result')

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
                    const formData = new FormData();
                    values.input.forEach((value: any, index: any) => {
                        formData.append(`input[${index}]`, value);
                    });
                    async function Submit() {
                        setLoading(true);
                        try {
                            postGuest("v1/calculate", formData)
                                .then((res: any) => {
                                    console.log(res);
                                    if (res.status === 200) {
                                        // console.log("OK")
                                        // console.log(res.data.data.status);
                                        // ini response nya perlu di benerin di backend nya
                                        // if (res.data.data.status) {
                                        //     // console.log("This is error")
                                        //     setError(true);
                                        //     handleClose();
                                        //     console.log(open);
                                        //     return;
                                        // }
                                        dispatch(setDataEntry(res.data));
                                        navigateToResult();
                                    } else {
                                        // console.log("This is error else")
                                        setError(true);
                                        setMessage("An Error Occured")
                                        handleClose()
                                    }
                                    setLoading(false);
                                }).catch((err) => {
                                    console.log(err);
                                    setError(true);
                                    setMessage("An Error Occured")
                                    setLoading(false);
                                })
                        } catch {
                            console.log("error");
                        }
                    }
                    Submit();
                }}
            >
                {({
                    // values,
                    // errors,
                    handleSubmit,
                    handleChange,
                }) => (
                    <div>
                        {loading && <LoadingScreen />}
                        <form noValidate onSubmit={handleSubmit}>
                            {error &&
                                <Alert severity="error">{message}</Alert>}
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
                                    <Text fontWeight={"bold"} textalign={"center"}>
                                        Mana yang lebih penting bagi anda dalam memilih parfum?
                                    </Text>
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
                                                                name={`input.${index}`}
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
                                    {/* <Modal
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <Button>
                                            Open
                                        </Button>
                                    </Modal> */}
                                    <Button
                                        onclick={handleOpen}
                                    >
                                        Submit
                                    </Button>
                                    <CustomModal
                                        title={"Submit"}
                                        open={open}
                                        // onClose={handleClose}
                                        closebtn={true}
                                        hideButton={true}
                                    >
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            Are you sure to want to submit ?
                                        </Typography>
                                        <Flex>
                                            <><Button
                                                type="submit"
                                                onclick={handleSubmit}
                                            >
                                                Yes
                                            </Button>
                                                <Button
                                                    onclick={handleClose}
                                                    bgcolor={"rgb(255, 255, 255, 0)"}
                                                >
                                                    No
                                                </Button></>
                                        </Flex>
                                    </CustomModal>
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