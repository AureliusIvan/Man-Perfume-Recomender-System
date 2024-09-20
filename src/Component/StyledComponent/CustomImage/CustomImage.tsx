import React from "react";
import style from "./CustomImage.module.scss";
import IMG from "@/Assets/Image/logo.png"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogin } from "@/Redux/feature/dataSlice";



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
         alt={"Custom Images"}/>
    )
}

export function LogoImage(props: LogoImageProps) {
    const navigate = useNavigate()
    const Login = useSelector(selectIsLogin)
    function onClick() {
        if (Login) navigate('/admin')
        else navigate('/');
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
