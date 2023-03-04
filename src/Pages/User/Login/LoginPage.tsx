// This is Login Page for user to be able to access admin page
import { CustomBox as Box } from "../../../Component/StyledComponent/CustomBox/CustomBox"
import { CustomInput as Input } from "../../../Component/StyledComponent/CustomInput/CustomInput"
// import { Confirmations } from "../../../Component/StyledComponent/CustomModal/CustomModal"
// import { Rating } from "@mui/material"
import { CustomButton as Button } from "../../../Component/StyledComponent/CustomButton/CustomButton"
import { LogoImage } from "../../../Component/StyledComponent/CustomImage/CustomImage"
import Center from "../../../Component/StyledComponent/CustomCenter/Center"
import style from "./LoginPage.module.scss"
import Spacer from "../Spacer/spacer"

export default function LoginPage() {
    return (
        <div className={style.LoginPage}>
            {/* <Center y> */}
            <Box padding={"50px"}>
                <LogoImage size="200px" />
                <Input label="Username" />
                <Input label="Password" />
                <Spacer y="20px" />
                <Button>
                    LOGIN
                </Button>
            </Box>
            {/* </Center> */}
        </div>
    )
}