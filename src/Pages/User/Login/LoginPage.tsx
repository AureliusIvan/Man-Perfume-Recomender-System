// This is Login Page for user to be able to access admin page
import { CustomBox as Box } from "../../../Component/StyledComponent/CustomBox/CustomBox"
import { CustomInput as Input } from "../../../Component/StyledComponent/CustomInput/CustomInput"
import { Confirmations } from "../../../Component/StyledComponent/CustomModal/CustomModal"
import { Rating } from "@mui/material"

export default function LoginPage() {
    return (
        <>
            <Box>
                <Input label="Username" />
                <Input label="Password" />
                {/* <Modal /> */}
                {/* <Confirmations title="Submit" /> */}
                {/* <Tooltip title="Rate your Experience!"> */}
                {/* <Rating /> */}
                {/* </Tooltip> */}
            </Box>
        </>
    )
}