import style from "./CustomButton.module.scss";
import Button from "@mui/material/Button";

export function CustomButton(props: any) {
  return (
    <Button
      variant="contained"
      className={style.button}
      {...props}
      onClick={props.onClick}
    >
      {props.children ? props.children : "Click Me!"}
    </Button >
  )
}