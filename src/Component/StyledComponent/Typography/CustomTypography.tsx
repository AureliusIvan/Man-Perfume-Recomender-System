import React from "react";
import style from "./CustomTypography.module.scss"
import { useTheme } from "@mui/material/styles";
import Spacer from "@/Pages/User/Spacer/spacer";


interface TextProps {
    width?: string,
    height?: string,
    textalign?: string | any,
    fontSize?: string,
    fontWeight?: string,
    reverse?: string,
    margin?: string,
    margintop?: string,
    marginbottom?: string,
    marginleft?: string,
    marginright?: string,
    padding?: string,
    paddingtop?: string,
    paddingbottom?: string,
    paddingleft?: string,
    paddingright?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    color?: string,
}


export function Text(props: TextProps) {
    const theme = useTheme();
    return (
        <div
            className={style.Text}
            {...props}
            style={{
                ...props.style,
                width: props.width ? props.width : "100%",
                height: props.height ? props.height : "100%",
                textAlign: props.textalign && props.textalign,
                fontSize: props.fontSize ? props.fontSize : "15px",
                fontWeight: props.fontWeight ? props.fontWeight : "normal",
                color: props.color ? props.color : theme.palette.mode === (props.reverse === "true" ? "light" : "dark") ? '#fff' : '#000',
                marginTop: props.margintop ? props.margintop : "0px",
                marginBottom: props.marginbottom ? props.marginbottom : "0px",
                marginLeft: props.marginleft ? props.marginleft : "0px",
                marginRight: props.marginright ? props.marginright : "0px",
                padding: props.padding ? props.padding : "0px",
                paddingTop: props.paddingtop ? props.paddingtop : "0px",
                paddingBottom: props.paddingbottom ? props.paddingbottom : "0px",
                paddingLeft: props.paddingleft ? props.paddingleft : "0px",
                paddingRight: props.paddingright ? props.paddingright : "0px",
            }}>
            {props.children ? props.children : ""}
        </div>
    );
}

export function Title(props: any) {
    const theme = useTheme();
    return (
        <div
            className={style.Title}
            {...props}
            style={{
                ...props.style,
                textTransform: props.texttransform && props.texttransform,
                textAlign: props.textalign ? props.textalign : "left",
                color: theme.palette.mode === (props.reverse === "true" ? "light" : "dark") ? '#fff' : '#000',
                fontSize: props.fontSize ? props.fontSize : "",
                fontWeight: props.fontWeight ? props.fontWeight : "bold",
                marginLeft: props.marginleft ? props.marginleft : "0px",
                marginRight: props.marginright ? props.marginright : "0px",
            }}
        >
            {props.children ? props.children : "Aroma lebih penting dari harga."}
        </div>
    );
}


export function StyledTitle(props: any) {
    return (
        <div className={style.StyledTitle}>
            <h2>
                <span>&rdquo;</span>
                {props.children}
                <span>&ldquo;</span>
            </h2>
        </div>
    )
}


export function Paragraf(props: any) {
    return (<>
        {props.styledTitle ?
            <StyledTitle>
                {props.title}
            </StyledTitle> :
            <Title
                textalign={props.textalign ? props.textalign : "left"}>
                {props.title}
            </Title>
        }
        <Spacer y={props.spacer ? props.spacer : "20px"} />
        <div style={{
            textAlign: props.textAlign ? props.textAlign : "center",
            paddingInline: props.paddingInline ? props.paddingInline : "20px",
            color: props.color ? props.color : "rgb(255, 255, 255, 0.6)",
        }}
        >
            {props.children ? props.children : "Aroma lebih penting dari harga. Ini adalah Paragraf"}
        </div>
    </>
    );
}