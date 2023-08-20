import { CustomButton as Button } from "../../../Component/StyledComponent/CustomButton/CustomButton";
import { Grid } from "@material-ui/core";
import welcomeimg from "../../../Assets/Image/welcome.webp";
import { Title } from "../../../Component/StyledComponent/Typography/CustomTypography";
import Center from "../../../Component/StyledComponent/CustomCenter/Center";
import { CustomImage as Img } from "../../../Component/StyledComponent/CustomImage/CustomImage";
import { useNavigate } from "react-router-dom";
import { Custommotion as M } from "@/Component/StyledComponent/CustomAnimation/Custommotion";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import style from "./Welcome.module.scss";

import { useTranslation } from "react-i18next";

function WelcomePage() {
    const navigate = useNavigate();
    const handler = () => navigate("/start");

    const { t } = useTranslation();
    return (
        <div className={style.container}>
            <Center width="70%">
                <Title
                    style={{
                        marginBottom: "20px",
                    }}
                >
                    {t("welcome")}
                </Title>
                <Button
                    onClick={handler}>
                    <span
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {t("start")}
                        <KeyboardArrowRightIcon />
                    </span>
                </Button>
            </Center>
            <Center>
                <Img src={welcomeimg} />
            </Center>
            {/* <a className={style.a} href="#desc">
                <div className={style.down}></div>
            </a> */}
        </div>
    );
}

export default WelcomePage;
