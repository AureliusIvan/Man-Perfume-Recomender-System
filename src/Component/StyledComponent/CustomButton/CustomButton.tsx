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
      // onClick={props.onClick}
      style={{
        // display: props.display ? props.display : "flex",
        // justifyContent: props.justifyContent ? props.justifyContent : "center",
        // alignItems: props.alignItems ? props.alignItems : "center",
        // height: props.height ? props.height : "40px",
        // width: props.width ? props.width : "100%",
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