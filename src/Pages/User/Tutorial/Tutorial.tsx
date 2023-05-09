import { CustomButton as Button } from "../../../Component/StyledComponent/CustomButton/CustomButton"
import { CustomBox as Box } from "../../../Component/StyledComponent/CustomBox/CustomBox"
import { Paragraf, Title } from "../../../Component/StyledComponent/Typography/CustomTypography"
// import { Grid as G } from "@material-ui/core"
import { Grid } from "@mui/material"
import { styled, useTheme } from "@material-ui/styles"
// import styled from "@emotion/styled/types/base"
import { Text } from "../../../Component/StyledComponent/Typography/CustomTypography"
import { TutorialData } from "./TutorialData"
import style from "./Tutorial.module.scss"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import useMediaQuery from "@mui/material/useMediaQuery"
// import { useTheme } from "@mui/material"

// const Grid = styled(G)(({ theme }) => ({
//     padding: '10px',
//     // width: '90%',
// }));

const GridItem = styled(Grid)(({ theme }) => ({
    // padding: '20px',
    // width: '90%',
}));



Card.defaultProps = {
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
}

interface defaulprops {
    text: string,
    title: string,
    img: string,
}

function Card(props: defaulprops) {
    const Mobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme();
    return (<>
        <Grid container
            className={style.card}
        >
            <Grid item xs={12} sm={3} md={3} lg={2}>
                <img src={props.img} className={style.img} />
            </Grid>
            {Mobile ? "" :
                <Grid item sm={9} md={9} lg={10}>
                    <h3 className={style.h3}>{
                        props.title
                    }</h3>
                    <p className={style.p}>
                        {props.text}
                    </p>
                    {Mobile ?
                        <button
                            className={style.button}
                        >
                            <Text width={'fit-content'}>
                                Learn More
                            </Text>
                            <ArrowForwardIcon color={
                                theme === 'dark' ? 'secondary' : 'primary'
                            } />
                        </button>
                        : ""}
                </Grid>}
        </Grid>

    </>)
}




export default function Tutorial() {
    let i = 4;
    return (<>
        <Paragraf title="Cara Penggunaan">
            Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content.
        </Paragraf>
        <Grid container sx={{
            width: '90%',
            padding: '10px',
        }}>
            {
                TutorialData.map((item, index) => {
                    return (
                        <GridItem key={index} item xs={12}>
                            <Card img={item.image} title={item.title} />
                        </GridItem>
                    )
                })
            }
        </Grid >
    </>
    )
}
