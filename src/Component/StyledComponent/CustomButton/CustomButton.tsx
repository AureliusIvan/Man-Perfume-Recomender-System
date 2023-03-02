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
        ...props.style,
        backgroundColor: props.bgColor ? props.bgColor : theme.palette.background,
        color: "white",
      }}
    >
      <b>
        {props.children ? props.children : "Click Me!"}
      </b>
    </button >
  )
}