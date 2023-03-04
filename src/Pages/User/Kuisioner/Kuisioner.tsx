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


export default function Kuisioner() {
    const navigate = useNavigate()
    const navigateToResult = () => {
        navigate('/result')
    }
    let i = 5;
    return (
        <div>
            <Spacer y={"20px"} />
            <Center>
                {/* Starter pack survey form, hope this help! */}
                <Box>
                    <Spacer y={"20px"} />
                    <M>
                        <Title>
                            {MainTitle}
                        </Title>
                    </M>
                    <Spacer y={"20px"} />
                    {Array(i).fill(0).map((_, index) => {
                        return (
                            <BoxSection key={index}>
                                <Grid container spacing={2} key={index}>
                                    <Text />
                                    <Grid item xs={4} sm={3} md={2} xl={1}>
                                        <Text>
                                            Penting
                                        </Text>
                                    </Grid>
                                    <Grid item xs={4} sm={6} md={8} xl={10}>
                                        <CustomSlider />
                                    </Grid>
                                    <Grid item xs={4} sm={3} md={2} xl={1}>
                                        <Text>
                                            Tidak Penting
                                        </Text>
                                    </Grid>
                                </Grid>
                                <Spacer y={"20px"} />
                            </BoxSection>
                        )
                    })}

                    <Button onClick={navigateToResult}>
                        Submit
                    </Button>
                </Box>
            </Center>
        </div>
    )
}