// import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
// import { withTheme } from '@emotion/react';
// import { WithTheme } from '@material-ui/core';
import withTheme from '@material-ui/core/styles/withTheme';

const CInput = styled(withTheme(TextField))((props: any) => (
  {
    'label.MuiInputLabel-root': {
      color: 'inherit',
    },
    'label.Mui-focused': {
      color: props.primary,
    },
    'input.MuiInputBase-input': {
      color: 'inherit',
    },
    'input.MuiInputBase-input.Mui-focused': {
      color: 'inherit',
    },
  }));

export default function CustomInput(props: any) {
  return (
    <CInput
      id="standard-basic"
      label={props.label ? props.label : "Enter Input"}
      sx={{
      }}
      color="inherit"
      {...props}
    />
  )
}