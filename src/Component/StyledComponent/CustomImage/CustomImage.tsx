import style from "./CustomImage.module.scss";
// import { useTheme } from "@mui/material/styles";
import IMG from "../../../Assets/image/logo.png"
import { useNavigate } from "react-router-dom";

export function CustomImage(props: any) {
    return (
        <img src={props.src} className={style.img}
            {...props}
        />
    )
}

export function LogoImage(props: any) {
    const navigate = useNavigate()
    function onClick() {
        navigate('/');
    }
    return (
        <div
            onClick={props.onClick ? props.onClick : onClick}
            className={style.logo} style={{
                ...props.style,
                width: props.width ? props.size : "50px",
                height: props.height ? props.size : "50px",
            }} />
    )
}
