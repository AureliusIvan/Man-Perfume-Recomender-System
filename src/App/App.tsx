// APP
import './App.scss'
import React, { useContext, createContext, useMemo, lazy, Suspense } from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { CustomButton as Button } from '../Component/StyledComponent/CustomButton/CustomButton';
import CssBaseline from '@mui/material/CssBaseline';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Icon } from '@material-ui/core';

import PageLayout from '@/Component/RoutingComponent/PageLayout';

// context for the theme
const ColorModeContext = createContext({ toggleColorMode: () => { } });

// just toogle for the theme
export function Toogle() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Button
      variant="outlined"
      margin={"20px"}
      onClick={colorMode.toggleColorMode}>
      {/* {theme.palette.mode === 'dark' ? "Dark" : "Light"} */}
      {/* <Icon component={'image'} /> */}
      {/* <svg src={DarkModeIcon} alt="" /> */}
      {/* <DarkModeIcon /> */}

      {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon color='primary' />}
    </Button>
  );
}


export default function App() {
  // const mode is the state of the theme
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  // prevent the theme from changing when the component re-renders
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  // create a theme based on the state of the theme
  const theme = useMemo(
    () =>
      // customize the theme here
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === 'light' ? 'rgb(175, 194, 210)' : '#121217',
            paper: mode === 'light' ? '#fff' : '#424242',
          },
          text: {
            primary: mode === 'light' ? '#303030' : '#fff',
            secondary: mode === 'light' ? '#303030' : 'rgb(175, 194, 210)',
          },
          primary: {
            main: mode === 'light' ? '#303030' : '#fff',
          },
          secondary: {
            main: mode === 'light' ? '#fff' : '#303030',
          },
          error: {
            main: mode === 'light' ? '#fff' : '#303030',
          },
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
          },
        },
      }),
    [mode],
  );

  return (
    <div className="App">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <PageLayout />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  )
}

// nantinya kalo mau tambahin page bisa langsung import di Routing.tsx