import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#be9b4d'
    },
    secondary: {
      main: '#1a1919'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  }
});

export default theme;
