import { BoxSection } from "../../../Component/StyledComponent/CustomBox/CustomBox";
import { Paragraf, Text, Title } from "../../../Component/StyledComponent/Typography/CustomTypography";
import CustomSlider from "../../../Component/StyledComponent/CustomSlider/CustomSlider";
import React, { useEffect, useState } from "react";
import { get } from "../../../Component/FunctionComponent/axiosClient/axiosClient";
import { CustomCard, ResultCard } from "../../../Component/StyledComponent/CustomCard/CustomCard";
import { Grid as G } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import Center from "../../../Component/StyledComponent/CustomCenter/Center";

const Grid = styled(G)(({ theme }) => ({
    // padding: '100px',
    paddingTop: '20px',
}));

const GridItem = styled(G)(({ theme }) => ({
    padding: '10px',
    // width: '90%',
}));



function Recommendation() {
    let i = 5;
    const [naruto, setNaruto] = useState<object[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        try {
            setLoading(true);
            get("").then((res: any) => {
                console.log(res.data);
                setNaruto(res.data)
            })
            setLoading(false);
        }
        catch (err) {
            console.log(err)
        }
    }, [])

    return (
        <>
            <Center>
                <Paragraf />
            </Center>
            <Grid container>
                {naruto.map((item: any, index) => {
                    if (index < 6) {
                        return (
                            <GridItem item xs={12}>
                                <ResultCard
                                    title={item.name}
                                    image={item.images[0]}
                                    key={index} />
                            </GridItem>
                        )
                    }

                })}
                {/* {naruto.map((item: any, index) => {
                    if (index < 6) {
                        return (
                            <GridItem item md={4}>
                                <CustomCard
                                    title={item.name}
                                    image={item.images[0]}
                                    key={index} />
                            </GridItem>
                        )
                    }
                })} */}
            </Grid>
        </>
    )
}

export default Recommendation;