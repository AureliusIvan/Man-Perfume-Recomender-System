import React from "react"
import { CustomButton as Button } from "../../../Component/StyledComponent/CustomButton/CustomButton"
import { Grid } from "@material-ui/core"
import welcomeimg from "../../../Assets/Image/welcome.webp"
import { Title } from "../../../Component/StyledComponent/Typography/CustomTypography"
import Center from "../../../Component/StyledComponent/CustomCenter/Center"
import { CustomImage as Img } from "../../../Component/StyledComponent/CustomImage/CustomImage"
import { useNavigate } from "react-router-dom"
import { Custommotion as M } from "@/Component/StyledComponent/CustomAnimation/Custommotion"
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import style from "./Welcome.module.scss"

import { useTranslation } from "react-i18next"

export default function WelcomePage() {
    const navigate = useNavigate()
    const handler = () => navigate('/start');

    const { t } = useTranslation();
    return (
        <div style={{
            minHeight: '75vh',
            display: 'flex',
        }}>
            <M>
                <Grid container>
                    <Grid item xs={12} md={5}>
                        <Center>
                            <Title style={{
                                marginBottom: '20px',
                            }}>
                                {t("welcome")}
                            </Title>
                            <Button onclick={handler}>
                                <span style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    {t("start")}<KeyboardArrowRightIcon />
                                </span>
                            </Button>
                        </Center>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Center>
                            <Img src={welcomeimg} />
                        </Center>
                    </Grid>
                </Grid>
            </M>
            <a className={style.a} href="#desc">
                <div className={style.down}>
                </div>
            </a>
        </div>
    )
}