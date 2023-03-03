import { CustomButton as Button } from "../../../Component/StyledComponent/CustomButton/CustomButton"
import { CustomBox as Box } from "../../../Component/StyledComponent/CustomBox/CustomBox"
import { Paragraf, Title } from "../../../Component/StyledComponent/Typography/CustomTypography"
// import { Grid as G } from "@material-ui/core"
import { Grid as G } from "@mui/material"
import { styled } from "@material-ui/styles"
// import styled from "@emotion/styled/types/base"
import { Text } from "../../../Component/StyledComponent/Typography/CustomTypography"
import { TutorialData } from "./TutorialData"
import style from "./Tutorial.module.scss"

const Grid = styled(G)(({ theme }) => ({
    padding: '10px',
    // width: '90%',
}));

const GridItem = styled(G)(({ theme }) => ({
    // padding: '20px',
    // width: '90%',
}));



function Card(props: any) {
    return (<>
        <div className={style.card}>
            <Grid container sx={{
                width: '90%',
                padding: '10px',
            }}>
                <Grid item xs={6}>
                    <img src={props.img} className={style.img} />
                </Grid>
                <Grid item xs={6}>
                    {/* <Title fontsize="10px">
                        Dar Der Dor
                    </Title> */}
                    {/* <Text>
                        Dar Der Dor
                    </Text> */}
                    <h3 className={style.h3}>Temukan</h3>
                    <p className={style.p}>This is Desc</p>
                    <Button variant="outlined" padding="0" margin="0"
                        color="primary"
                    >
                        Learn More {'>>'}
                    </Button>
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
                    return (<>
                        <GridItem key={index} item xs={6}>
                            <Card img={item.image} />
                        </GridItem>
                    </>
                    )
                })
            }
        </Grid>
    </>
    )
}

export default Tutorial