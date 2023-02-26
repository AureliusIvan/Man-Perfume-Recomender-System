// APP
import './App.scss'
import React, { useContext, createContext, useMemo } from 'react';
import { CustomButton as Button } from '../Component/StyledComponent/CustomButton/CustomButton';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import UserPage from '../Pages/User/UserPage';


// context for the theme
const ColorModeContext = createContext({ toggleColorMode: () => { } });

// just toogle for the theme
export function Toogle() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Button sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === 'dark' ? "Dark" : "Light"}
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
            default: mode === 'light' ? 'rgb(175, 194, 210)' : '#303030',
            paper: mode === 'light' ? '#fff' : '#424242',
          },
          text: {
            primary: mode === 'light' ? '#303030' : 'rgb(175, 194, 210)',
            secondary: mode === 'light' ? '#303030' : 'rgb(175, 194, 210)',
          }
        },
      }),
    [mode],
  );

  return (
    <div className="App">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* App can be added bellow here */}
          <UserPage />
          {/*  */}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  )
}


