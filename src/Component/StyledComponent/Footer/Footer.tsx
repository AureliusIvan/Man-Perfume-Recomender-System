import React from "react";
// import CustomProgress from "../CustomProgress/CustomProgress";
import style from "./Footer.module.scss";
// import Center from "../CustomCenter/Center";

interface FooterProps {
    children?: React.ReactNode,
}

export default function Footer(props: FooterProps) {
    return (
        <div className={style.footer}>
            {props.children}
            &copy; Copyright 2023 by Universitas Multimedia Nusantara
        </div>
    )
}   