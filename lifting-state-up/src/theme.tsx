import {red, blue, yellow} from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue.A400,
    },
    secondary: {
      main: red.A700,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    }
  },
});

export default theme;