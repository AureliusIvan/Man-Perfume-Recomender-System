import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
// import { withTheme } from '@emotion/react';
// import { WithTheme } from '@material-ui/core';
import withTheme from '@material-ui/core/styles/withTheme';


const CInput = styled(withTheme(TextField))(() => (
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
    input: {
      // borderRadius: 4,
      // position: 'relative',
      // backgroundColor: "white",
      // border: '1px solid #ced4da',
      // fontSize: 16,
      // padding: '10px 12px',
      // width: '100%',
      // '&:focus': {
      //   boxShadow: `blue 0 0 0 0.2rem`,
      //   borderColor: 'blue',
      // },
      ":after": {
        borderBottom: '2px solid red',
        boxShadow: `blue 0 0 0 0.2rem`,
        borderColor: 'blue',
        display: 'none',
      },
      input: {
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          borderBottom: '2px solid #ced4da',
          // transition: theme.transitions.create('border-bottom-color'),
        },
        '&:hover:not($disabled):before': {
          borderBottom: `2px solid red`,
        },
        '&$focused:before': {
          borderBottom: `2px solid red`,
        },
      },
      focused: {},
      disabled: {},
    }
  }));


interface CustomInputProps {
  label?: string,
  color?: any,
  style?: any,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  value?: string,
  type?: string,
  name?: string,
  placeholder?: string,
  disabled?: boolean,
  required?: boolean,
  error?: boolean,
  helperText?: string,
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void,
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void,
  innerRef?: any,
  ref?: any,
  defaultValue?: string,
}


export function CustomInput(props: CustomInputProps) {
  const theme = useTheme();
  return (
    <CInput
      // innerRef={props.innerRef}
      ref={props.ref}
      onKeyDown={props.onKeyDown}
      type={props.type ? props.type : "text"}
      id="standard-basic"
      label={props.label ? props.label : "Enter Input"}
      helperText={props.helperText}
      color="primary"
      onBlur={props.onBlur}
      value={props.value}
      defaultValue={props.defaultValue}
      inputProps={{
        color: 'red',
        style: {
          color: theme.palette.mode === 'dark' ? "white" : "black",
          borderBlockEndColor: 'white',
          borderBlockEndStyle: 'solid',
          borderRadius: '20px',
          paddingInline: '10px',
          outline: 'none',

        }
      }}
      {...props}
    />
  )
}