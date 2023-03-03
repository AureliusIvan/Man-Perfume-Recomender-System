import style from "./CustomButton.module.scss";
// import Button from "@mui/material/Button";
// import { useTheme } from "@material-ui/core";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

export function CustomButton(props: any) {
  const theme = useTheme();
  return (
    <button
      className={props.variant === "outlined" ? style.buttonoutlined : style.button}
      {...props}
      onClick={props.onClick}
      style={{
        margin: props.margin ? props.margin : "0px",
        padding: props.padding ? props.padding : "",
        paddingInline: props.paddingInline ? props.paddingInline : "17px",
        ...props.style,
        backgroundColor: props.bgColor ? props.bgColor : theme.palette.background,
        color: props.color ? theme.palette.text.primary : "white",
      }}
    >
      <b>
        {props.children ? props.children : "Click Me!"}
      </b>
    </button >
  )
}