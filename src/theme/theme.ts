import { createMuiTheme } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: "#0E0E10",
      paper: "#1D1D29"
    },
    primary: {
      main: "#6C19B0"
    }
  },
  typography: {
    fontFamily: [
      "Rubik",
      'sans-serif',
    ].join(','),
    subtitle2: {
      color: "#525252"
    }
  },
});

export default theme;