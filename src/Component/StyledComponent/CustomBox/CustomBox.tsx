import React from "react"
// Custom box is a component that allows you to create a box with custom style.
import Box from "@material-ui/core/Box"
import styled from "@emotion/styled"
import style from "./CustomBox.module.scss"
import { useTheme } from "@mui/material/styles";
import { Divider } from "@mui/material";

// our custom box style
const CBox = styled(Box)(() => ({
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
}));


interface OverflowYProperty {
    overflowY?: string;
}

interface CustomBoxProps {
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    width?: string;
    padding?: string;
    margin?: string;
    borderRadius?: string;
    maxWidth?: string;
    maxHeight?: string;
    overflow?: string;
    marginLeft?: string;
    marginRight?: string;
    reverse?: string;
    overflowY?: any;
}

export function CustomBox(props: CustomBoxProps) {
    const theme = useTheme();
    return (
        <CBox
            className={props.className ? props.className : style.Box}
            {...props}
            style={{
                ...props.style,
                backgroundColor: theme.palette.mode === (props.reverse === "true" ? 'light' : 'dark') ? "#1e1e1e" : '#f5f5f5',
                width: props.width ? props.width : "100%",
                padding: props.padding ? props.padding : "",
                margin: props.margin ? props.margin : "",
                borderRadius: props.borderRadius ? props.borderRadius : "20px",
                maxWidth: props.maxWidth ? props.maxWidth : "100%",
                maxHeight: props.maxHeight ? props.maxHeight : "100%",
                overflow: props.overflow ? props.overflow : "hidden",
                overflowY: props.overflowY,
                marginLeft: props.marginLeft ? props.marginLeft : "",
                marginRight: props.marginRight ? props.marginRight : "",
            }}
        >
            {props.children}
        </CBox>
    )
}


export function Flex(props: any) {
    return (
        <div style={{
            ...props.style,
            display: 'flex',
            flexDirection: props.direction ? props.direction : 'row',
            flexWrap: props.flexWrap ? props.flexWrap : 'nowrap',
            alignItems: props.align ? props.align : 'center',
            justifyContent: props.justify ? props.justify : 'center',
            gap: props.gap ? props.gap : '10px',
        }}
            {...props}
        >
            {props.children}
        </div >
    )
}


export function BoxSection(props: any) {
    return (
        <div
            className={style.BoxSection}
            {...props}
            style={{
                ...props.style,
                padding: props.padding ? props.padding : "20px",
                paddingBottom: props.paddingBottom ? props.paddingBottom : "20px",
                paddingTop: props.paddingTop,
                paddingLeft: props.paddingLeft ? props.paddingLeft : "20px",
                paddingRight: props.paddingRight ? props.paddingRight : "20px",
                margin: props.margin ? props.margin : "20px",
                marginBottom: props.marginBottom ? props.marginBottom : "20px",
                marginTop: props.marginTop ? props.marginTop : "20px",
                marginLeft: props.marginLeft ? props.marginLeft : "20px",
                marginRight: props.marginRight ? props.marginRight : "20px",
                // borderRadius: props.borderRadius ? props.borderRadius : "20px",
            }}
        >
            {props.children}
            {/* <Divider variant="middle" /> */}
        </div>
    )
}
