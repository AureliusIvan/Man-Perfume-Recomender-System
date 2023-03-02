import { CustomBox as Box } from "../../../Component/StyledComponent/CustomBox/CustomBox"
import { CustomButton as Button } from "../../../Component/StyledComponent/CustomButton/CustomButton"
import { Grid } from "@material-ui/core"
import welcomeimg from "../../../Assets/Image/welcome.png"
import { Title } from "../../../Component/StyledComponent/Typography/CustomTypography"
import Center from "../../../Component/StyledComponent/CustomCenter/Center"
import { CustomImage as Img } from "../../../Component/StyledComponent/CustomImage/CustomImage"

export default function WelcomePage() {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={5}>
                    <Center>
                        <Title style={{
                            marginBottom: '20px',
                        }}>
                            Selamat Datang!
                        </Title>
                        <Button>
                            Mulai Menentukan Parfum
                        </Button>
                    </Center>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Center>
                        <Img src={welcomeimg} />
                    </Center>
                </Grid>
            </Grid>
        </div>
    )
}