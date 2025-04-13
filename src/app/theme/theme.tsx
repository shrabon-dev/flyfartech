import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#EDF2F6',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#f7f7f7',
    },
    secondary: {
      light: '#D7E7F4',
      main: '#32D095',
      dark: '#525371',
      contrastText: '#f7f7f7',
    },
  },
});

export default theme;
