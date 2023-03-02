import style from "./CustomImage.module.scss";
// import { useTheme } from "@mui/material/styles";
import IMG from "../../../Assets/image/logo.png"

export function CustomImage(props: any) {
    return (
        <img className={style.img}
            {...props}
        />
    )
}

export function LogoImage(props: any) {
    return (
        <div className={style.logo} style={{
            ...props.style,
            width: props.width ? props.size : "50px",
            height: props.height ? props.size : "50px",
            // border: props.border ? props.border : "1px solid black",
            // backgroundSize: props.backgroundSize ? props.backgroundSize : "90% 90%",
        }} />
    )
}
