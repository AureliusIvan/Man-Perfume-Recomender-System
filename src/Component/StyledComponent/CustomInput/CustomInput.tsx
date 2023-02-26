// import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export default function CustomInput(props: any) {
  return (
    <TextField
      id="standard-basic"
      label={props.label ? props.label : "Enter Input"}
      {...props}
    />
  )
}