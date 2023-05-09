// import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
// import { withTheme } from '@emotion/react';
// import { WithTheme } from '@material-ui/core';
import withTheme from '@material-ui/core/styles/withTheme';

const CInput = styled(withTheme(TextField))(({ theme }) => (
  {
    'label.MuiInputLabel-root': {
      color: 'inherit',
    },
    'label.Mui-focused': {
      color: 'inherit',
    },
    'input.MuiInputBase-input': {
      color: 'inherit',
    },
    'input.MuiInputBase-input.Mui-focused': {
      color: 'inherit',
    },
    'input.MuiInputBase-input.Mui-disabled': {
      color: 'inherit',
    },

    // color: theme.palette.primary ? 'white' : 'black',
  }));

export function CustomInput(props: any) {
  const theme = useTheme();
  return (
    <CInput
      id="standard-basic"
      label={props.label ? props.label : "Enter Input"}
      color="primary"
      inputProps={{
        color: 'red',
        style: {
          color: theme.palette.mode === 'dark' ? "white" : "black",
          borderBlockEndColor: 'white',
          borderBlockEndStyle: 'solid',
          borderRadius: '20px',
          paddingInline: '10px',
          outline: 'none',
          '&:after ': {
            borderBottom: '2px solid red',
          },
        }
      }}
      {...props}
    />
  )
}