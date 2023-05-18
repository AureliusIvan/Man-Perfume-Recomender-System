import style from "./CustomButton.module.scss";
// import Button from "@mui/material/Button";
// import { useTheme } from "@material-ui/core";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from "react";
// import CustomSpinner from "../CustomSpinner/CustomSpinner";

export function CustomButton(props: any) {
  const theme = useTheme();
  return (
    <button
      onClick={props.onclick && props.onclick}
      disabled={props.disabled ? props.disabled : false}
      type={props.type ? props.type : "button"}
      className={props.variant === "outlined" ? style.buttonoutlined : style.button}
      {...props}
      style={{
        height: props.height && props.height,
        margin: props.margin ? props.margin : "0px",
        marginBottom: props.marginBottom && props.marginBottom,
        marginTop: props.marginTop && props.marginTop,
        padding: props.padding ? props.padding : "",
        paddingInline: props.paddingInline ? props.paddingInline : "17px",
        
        ...props.style,
        backgroundColor: props.bgcolor ? props.bgcolor : theme.palette.background,
        color: props.color ? theme.palette.text.primary : "white",
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