import { BoxSection } from "../../../Component/StyledComponent/CustomBox/CustomBox";
import { Paragraf, Text, Title } from "../../../Component/StyledComponent/Typography/CustomTypography";
import CustomSlider from "../../../Component/StyledComponent/CustomSlider/CustomSlider";
import React, { useEffect, useState } from "react";
import { get } from "../../../Component/FunctionComponent/axiosClient/axiosClient";
import { CustomCard, ResultCard } from "../../../Component/StyledComponent/CustomCard/CustomCard";
import { Grid as G, Typography } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import Center from "../../../Component/StyledComponent/CustomCenter/Center";
import { useDispatch, useSelector } from "react-redux";
import { setDataEntry, selectDataEntry } from "@/Redux/feature/dataSlice";
import Spacer from "../Spacer/spacer";

const Grid = styled(G)(({ theme }) => ({
    // padding: '100px',
    paddingTop: '20px',
}));

const GridItem = styled(G)(({ theme }) => ({
    padding: '10px',
    // width: '90%',
}));



export default function Result() {
    const [length, setLenght] = useState<number>(0);
    const dataEntry = useSelector(selectDataEntry);
    useEffect(() => {
        console.log(dataEntry);
    }, [])

    return (
        <>
            <Spacer y={'20px'} />
            <Center>
                {/* <Paragraf /> */}
                <Title>
                    Hasil Pencarian Parfum
                </Title>
            </Center>
            <Grid container>
                {dataEntry && dataEntry.map((item: any, index: any) => {
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
                })}
            </Grid>
        </>
    )
}

