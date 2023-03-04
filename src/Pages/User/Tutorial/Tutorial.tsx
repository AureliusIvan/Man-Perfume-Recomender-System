import { CustomButton as Button } from "../../../Component/StyledComponent/CustomButton/CustomButton"
import { CustomBox as Box } from "../../../Component/StyledComponent/CustomBox/CustomBox"
import { Paragraf, Title } from "../../../Component/StyledComponent/Typography/CustomTypography"
// import { Grid as G } from "@material-ui/core"
import { Grid as G } from "@mui/material"
import { styled, useTheme } from "@material-ui/styles"
// import styled from "@emotion/styled/types/base"
import { Text } from "../../../Component/StyledComponent/Typography/CustomTypography"
import { TutorialData } from "./TutorialData"
import style from "./Tutorial.module.scss"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { useTheme } from "@mui/material"

const Grid = styled(G)(({ theme }) => ({
    padding: '10px',
    // width: '90%',
}));

const GridItem = styled(G)(({ theme }) => ({
    // padding: '20px',
    // width: '90%',
}));



function Card(props: any) {
    const theme = useTheme();
    return (<>
        <div className={style.card}
            style={{
                // border: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f5f5f5',
                border: '1px solid',
                borderColor: theme === 'dark' ? '#1e1e1e' : '#f5f5f5',
            }}
        >
            <Grid container sx={{
                width: '90%',
                padding: '10px',
            }}>
                <Grid item xs={6}>
                    <img src={props.img} className={style.img} />
                </Grid>
                <Grid item xs={6}>
                    <h3 className={style.h3}>{
                        props.title
                    }</h3>
                    <p className={style.p}>Lorem</p>
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
                </Grid>
            </Grid>
        </div>
    </>)
}




function Tutorial() {
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
                        <GridItem key={index} item xs={6}>
                            <Card img={item.image} title={item.title} />
                        </GridItem>
                    )
                })
            }
        </Grid>
    </>
    )
}

export default Tutorial