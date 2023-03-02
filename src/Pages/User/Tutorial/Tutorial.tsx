import { CustomButton as Button } from "../../../Component/StyledComponent/CustomButton/CustomButton"
import { CustomBox as Box } from "../../../Component/StyledComponent/CustomBox/CustomBox"
import { Paragraf, Title } from "../../../Component/StyledComponent/Typography/CustomTypography"
import { Grid as G } from "@material-ui/core"
import { styled } from "@material-ui/styles"

const Grid = styled(G)(({ theme }) => ({
    padding: '10px',
    width: '90%',
}));

const GridItem = styled(G)(({ theme }) => ({
    padding: '10px',
    width: '90%',
}));



function Card() {
    return (<>
        <Box>
            <img />
            <Paragraf textAlign="left">
                Dar Der Dor
            </Paragraf>
            <Button >
                Learn More
            </Button>
        </Box>
    </>)
}



function Tutorial() {
    let i = 4;
    return (<>
        <Paragraf />
        <Grid container>
            {
                Array(i).fill(0).map((item, index) => {
                    return (
                        <GridItem item xs={6}>
                            <Card />
                        </GridItem>
                    )
                })
            }
        </Grid>
    </>
    )
}

export default Tutorial