import React, { useEffect } from "react";
// import { BoxSection } from "../../../Component/StyledComponent/CustomBox/CustomBox";
import { Title } from "../../../Component/StyledComponent/Typography/CustomTypography";
// import CustomSlider from "../../../Component/StyledComponent/CustomSlider/CustomSlider";
// import { get } from "../../../Component/FunctionComponent/axiosClient/axiosClient";
import { ResultCard } from "../../../Component/StyledComponent/CustomCard/CustomCard";
import { Grid as G } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import Center from "../../../Component/StyledComponent/CustomCenter/Center";
import { useSelector } from "react-redux";
import { selectDataEntry } from "@/Redux/feature/dataSlice";
import Spacer from "../Spacer/spacer";
import { CustomButton } from "@/Component/StyledComponent/CustomButton/CustomButton";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useNavigate } from "react-router";

import { useTranslation } from "react-i18next";

const Grid = styled(G)(() => ({
    // padding: '100px',
    paddingTop: '20px',
}));

const GridItem = styled(G)(() => ({
    padding: '10px',
    // width: '90%',
}));

// interface itemType {
//     nama: string,
//     foto: string,
//     preference_value: number,
//     id: number
// }

export default function Result() {
    const { t } = useTranslation();

    // const [length, setLenght] = useState<number>(0);
    const dataEntry: object[] = useSelector(selectDataEntry);
    useEffect(() => {
        // console.log(dataEntry);
        window.scrollTo(0, 0);
    }, [])
    const navigate = useNavigate();

    return (
        <>
            <Spacer y={'40px'} />
            <Center>
                {/* <Paragraf /> */}
                <Title>
                    Hasil Pencarian Parfum
                </Title>
                <br />
                <CustomButton
                    bgcolor={'rgb(0,0,0,0)'}
                    onclick={
                        () => {
                            navigate('/start')
                        }
                    }
                >
                    <span
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {t("restartTest")} <RestartAltIcon />
                    </span>
                </CustomButton>
            </Center>
            <Grid container>
                {Array.isArray(dataEntry) ? dataEntry.map((item: any, index: number) => {
                    return (
                        <GridItem item xs={12} key={index}>
                            <ResultCard
                                title={item.nama}
                                image={item.foto}
                                accuracy={item.preference_value}
                                data={item}
                                key={index} />
                        </GridItem>
                    )
                })
                    : <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            minHeight: '50vh',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: 'rgb(255, 255, 255, 0.5)',
                        }}
                    >Hasil tidak konsisten, coba lagi!</div>
                }
            </Grid>
        </>
    )
}

