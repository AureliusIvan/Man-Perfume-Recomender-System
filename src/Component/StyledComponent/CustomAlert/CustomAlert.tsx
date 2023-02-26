import Alert from '@mui/material/Alert';
import styled from "@emotion/styled"

const CAlert = styled(Alert)(() => ({
  zIndex: 7,
  marginInline: "auto",
  width: "fit-content",
  maxWidth: "90vw",
}));


export default function CustomAlert(props: any) {
  return (
    <CAlert
      severity={props.severity ? props.severity : "error"}
      {...props}
      style={{
        position: props.position ? props.position : "fixed",
        top: props.top ? props.top : "80px",
        right: props.right ? props.right : "0",
        left: props.left ? props.left : "0",
      }}
    >
      {props.children ? props.children : "Please fill the input first before submit!"}
    </CAlert>
  )
}