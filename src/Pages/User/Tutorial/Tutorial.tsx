import React from "react"
// import { CustomButton as Button } from "../../../Component/StyledComponent/CustomButton/CustomButton"
// import { CustomBox as Box } from "../../../Component/StyledComponent/CustomBox/CustomBox"
import { Paragraf } from "../../../Component/StyledComponent/Typography/CustomTypography"
// import { Grid as G } from "@material-ui/core"
import { Grid } from "@mui/material"
import { styled } from "@material-ui/styles"
// import styled from "@emotion/styled/types/base"
// import { Text } from "../../../Component/StyledComponent/Typography/CustomTypography"
import { TutorialData } from "./TutorialData"
import style from "./Tutorial.module.scss"
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import useMediaQuery from "@mui/material/useMediaQuery"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const GridItem = styled(Grid)(() => ({
    // padding: '20px',
    // width: '90%',
}));


interface defaulprops {
    text: string,
    title: string,
    img: string,
}

function Card(props: defaulprops) {
    const Mobile = useMediaQuery('(max-width:600px)');


    return (<motion.div
    >
        <Grid container
            className={style.card}
        >
            {Mobile ?
                <>
                    <Grid item xs={12} sm={9} md={9} lg={10}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <h3 className={style.h3}>
                            {props.title}
                        </h3>
                    </Grid>
                    <br />
                    <p className={style.p}>
                        {props.text}
                    </p>
                </>
                :
                <>
                    <Grid item sm={9} md={9} lg={12}>
                        <h3 className={style.h3}>
                            {props.title}
                        </h3>
                        <p className={style.p}>
                            {props.text}
                        </p>
                    </Grid>
                </>
            }
        </Grid>
    </motion.div>
    )
}




export default function Tutorial() {
    const Mobile = useMediaQuery('(max-width:600px)');
    return (<>
        <Paragraf title="Cara Penggunaan">
            <i>Berikut merupakan cara penggunaan aplikasi pendukung pemilihan keputusan parfum pria</i>
        </Paragraf>
        <Grid container sx={{
            width: Mobile ? '90%' : '50%',
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {
                TutorialData.map((item, index) => {
                    return (
                        <GridItem key={index} item xs={12}>
                            <Card img={item.image} title={item.title} text={item.description} />
                        </GridItem>
                    )
                })
            }
        </Grid >
    </>
    )
}
