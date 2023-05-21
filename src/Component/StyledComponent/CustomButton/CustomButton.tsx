import React from "react";
import style from "./CustomButton.module.scss";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

interface CustomButtonProps {
  variant?: "outlined" | "contained" | "text";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  bgcolor?: string;
  height?: string;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  padding?: string;
  paddingInline?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  onclick?: () => void;
  children?: React.ReactNode;
  loading?: boolean;
  width?: string;
}


export function CustomButton(props: CustomButtonProps) {
  const theme = useTheme();
  return (
    <button
      onClick={props.onclick && props.onclick}
      disabled={props.disabled ? props.disabled : false}
      type={props.type ? props.type : "button"}
      className={props.variant === "outlined" ? style.buttonoutlined : style.button}
      {...props}
      style={{
        width: props.width,
        height: props.height && props.height,
        margin: props.margin ? props.margin : "0px",
        marginBottom: props.marginBottom && props.marginBottom,
        marginTop: props.marginTop && props.marginTop,
        padding: props.padding ? props.padding : "",
        paddingInline: props.paddingInline ? props.paddingInline : "17px",
        // backgroundColor: "black",
        backgroundColor: props.bgcolor && props.bgcolor,
        color: props.color ? theme.palette.text.primary : "white",
        ...props.style,
      }}
    >
      <b>
        {props.children ? props.children : "Click Me!"}
      </b>
    </button >
  )
}

export function CustomButtonPlain(props: any) {
  const theme = useTheme();
  return (
    <button
      disabled={props.disabled ? props.disabled : false}
      type={props.type ? props.type : "button"}
      className={style.buttonplain}
      {...props}
      style={{
        width: props.width ? props.width : "100%",
        textAlign: props.textalign ? props.textalign : "left",
        border: props.border ? props.border : "none",
        pointerEvents: props.pointerEvents ? props.pointerEvents : "all",
        margin: props.margin ? props.margin : "0px",
        padding: props.padding ? props.padding : "",
        paddingInline: props.paddingInline ? props.paddingInline : "17px",
        ...props.style,
        backgroundColor: props.bgColor ? props.bgColor : "transparent",
        color: theme.palette.text.primary,
      }}
    >
      {props.children ? props.children : "Click Me!"}
    </button>
  )
}