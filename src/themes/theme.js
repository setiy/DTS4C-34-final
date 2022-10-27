import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#0a14ff',
      dark: '#9e9e9e',
      contrastText: '#b0bec5',
    },
    secondary: {
      main: '#d50000',
      light: '#d50000',
      dark: '#ff0000',
    },
    background: {
      default: '#424242',
      paper: '#757575',
    },
    text: {
      primary: '#9e9e9e',
      secondary: '#9e9e9e',
      hint: '#9e9e9e',
    },
  },
});

export default theme;
