import { BoxSection } from "../../../Component/StyledComponent/CustomBox/CustomBox";
import { Paragraf, Text, Title } from "../../../Component/StyledComponent/Typography/CustomTypography";
import CustomSlider from "../../../Component/StyledComponent/CustomSlider/CustomSlider";
import React, { useEffect, useState } from "react";
import { get } from "../../../Component/FunctionComponent/axiosClient/axiosClient";
import { CustomCard, ResultCard } from "../../../Component/StyledComponent/CustomCard/CustomCard";
import { Grid as G } from "@material-ui/core";
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
    let i = 5;
    const [naruto, setNaruto] = useState<object[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const dispatch = useDispatch();
    const dataEntry = useSelector(selectDataEntry);
    useEffect(() => {
        if (!dataEntry) {
            try {
                setLoading(true);
                get("")
                    .then((res: any) => {
                        setNaruto(res.data)
                        dispatch(setDataEntry(res.data))
                    })
                setLoading(false);
            }
            catch (err) {
                console.log(err)
            }
        } else {
            setNaruto(dataEntry)
        }
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
                {naruto.map((item: any, index) => {
                    if (index < 6) {
                        return (
                            <GridItem item xs={12} key={index}>
                                <ResultCard
                                    title={item.name}
                                    image={item.images[0]}
                                    key={index} />
                            </GridItem>
                        )
                    }

                })}
            </Grid>
        </>
    )
}

