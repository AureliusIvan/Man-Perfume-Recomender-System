import React from "react";
import style from "./CustomImage.module.scss";
// import { useTheme } from "@mui/material/styles";
import IMG from "../../../Assets/image/logo.png"
import { useNavigate } from "react-router-dom";



interface CustomImageProps {
    src?: string,
    width?: string,
    height?: string,
    size?: string,
    style?: React.CSSProperties,
    onClick?: () => void,
}

interface LogoImageProps {
    width?: string,
    height?: string,
    size?: string,
    style?: React.CSSProperties,
    onClick?: () => void,
}

export function CustomImage(props: CustomImageProps) {
    return (
        <img src={props.src} className={style.img}
            {...props}
        />
    )
}

export function LogoImage(props: LogoImageProps) {
    const navigate = useNavigate()
    function onClick() {
        navigate('/');
    }
    return (
        <img src={IMG} alt="logo"
            onClick={props.onClick ? props.onClick : onClick}
            className={style.logo} style={{
                ...props.style,
                width: props.width ? props.size : "50px",
                height: props.height ? props.size : "50px",
            }} />
    )
}
