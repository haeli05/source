import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
//import { applyMiddleware } from 'redux'
//import rootReducer from './reducers'
import {configureStore} from './store'
//import thunk from 'redux-thunk';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import JavascriptTimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'
import 'react-time-ago/Tooltip.css'
import run_check from './utils/expiry.js';
// chat
import { ThemeProvider } from '@livechat/ui-kit'
//import 'normalize.css'; // Note this



const new_json = require('./utils/cycle.js');
JavascriptTimeAgo.locale(en)
run_check();
// Main theme for the entire app
const theme = createMuiTheme({
  // Removes all theme shadows
  //shadows: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  // Colour palette
  palette: {
    primary: {
      light: "#9BA3B1",
      main: "#5E6572", // Blue/grey
      dark: "#1E242F",
    },
    secondary: {
      main: '#ad974f', // bronze
    },
    error: {
      main: '#C64444', // red
    },
  },
  // Fonts
  typography: {
    useNextVariants: true,
    // Root font
    fontSize: "13px",
    fontFamily: "'gotham_htfbook', 'Arial', sans-serif",
    color: "rgba(0,0,0,0.87)",
    fontWeight: "300",
    // Displays 1-4, headline, title, subheading, body1-2, button, caption
    display4: {
      fontSize: "4.409em",
      fontFamily: "gotham_htflight",
      color: "rgba(0,0,0,0.87)",
      letterSpacing: "-0.058em",
    },
    display3: {
      fontSize: "3.75em",
      fontFamily: "gotham_htflight",
      color: "rgba(0, 0, 0, 0.87)",
      letterSpacing: "-0.004em",
      fontWeight: 400,
    },
    display2: {
      fontSize: "3em",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 0.87)",
      letterSpacing: "0",
    },
    display1: {
      fontSize: "2.125em",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 0.87)",
      letterSpacing: "0.015625em",
    },

    //legacy. New here:
    h1: {
      fontSize: "6em",
      fontFamily: "gotham_htflight",
      color: "rgba(0,0,0,0.87)",
      letterSpacing: "-0.058em",

    },
    h2: {
      fontSize: "5em",
      fontFamily: "gotham_htflight",
      color: "rgba(0, 0, 0, 0.87)",
      letterSpacing: "-0.004em",
      fontWeight: 400,
    },
    h3: {
      fontSize: "3em",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 0.87)",
      letterSpacing: "0em",
      fontWeight: 400,
    },
    h4: {
      fontSize: "2.125em",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 0.87)",
      letterSpacing: "0.015625em",
    },
    h5: {
      fontSize: "1.4868em",
      fontFamily: "gotham_htfmedium",
      color: "rgba(0, 0, 0, 0.87)",
      letterSpacing: "0",
    },
    h6:{
      fontSize: "1.23875em",
      fontFamily: "gotham_htfmedium",
      color: "rgba(0, 0, 0, 0.87)",
      letterSpacing: "0.015625em",
    },
    subtitle1: {
      fontSize: "1em",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 0.6)",
      letterSpacing: "  0.03125em",
      lineHeight: "1.618em",
    },
    subtitle2: {
      fontSize: "0.875em",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 0.6)",
      letterSpacing: "0.00625em",
      lineHeight: "1.618em",
    },
    overline: {
      fontSize: "0.743125em",
      fontFamily: "gotham_htfmedium",
      color: "rgba(0, 0, 0, 0.6)",
      letterSpacing: "0.125em",
      fontWeight: "normal",
      textTransform: "initial",
    },
    headline: {
      fontSize: "1.486875em",
      fontFamily: "gotham_htfmedium",
      color: "rgba(0, 0, 0, 0.87)",
      letterSpacing: "0.00em",
      textTransform: "capitalize",
    },
    title: {
      fontSize: "1.25em",
      fontFamily: "gotham_htfmedium",
      color: "rgba(0, 0, 0, 0.87)",
      letterSpacing: "0.009375em",
      fontWeight: 400,
    },
    subheading: {
      fontSize: "1em",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 0.87)",
      letterSpacing: "0.15px",
      lineHeight:"0px",
    },
    body1: {
      fontSize: "1em",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 0.87)",
      letterSpacing: "0.009375em",
      lineHeight: "1.618",
    },
    body2: {
      fontSize: "0.8125em",
      fontFamily: "gotham_htfmedium",
      color: "rgba(0, 0, 0, 0.6)",
      letterSpacing: "0.25px",
      lineHeight: "1.618em",
    },
    button: {
      fontSize: "0.85731933292em",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 0.6)",
      letterSpacing: "1.25px",
    },
    caption: {
      fontSize: "0.9846153846em",
      fontFamily: "gotham_htflight",
      color: "rgba(0, 0, 0, 0.87)",
    },
  },
  /* ========== CSS Overrides ========== */
  overrides: {
    /* ---------- Navbar ---------- */
    MuiAppBar: {
      root: {
        border: "none",
      },
      colorPrimary: {
        // Material makes the navbar's text white when the colour is primary
        // and even though our implementation of the navbar does not have
        // the colour set as primary, it is still inheriting its styles from
        // the primary rules. Don't know why, but this fixes that.
        color: "inherit",
        backgroundColor: "transparent",
      },
    },
    /* ---------- Paper ---------- */
    MuiPaper: {
      root: {
        borderRadius: "0px",
      },
      elevation0: {
        borderRadius: "0px",
      },
    },
    /* ---------- Card ---------- */
    MuiCard: {
      root: {
        border: "none",
        overflow: "visible",
      },
    },
    /* ---------- All the buttons ---------- */
    MuiButton: {
      // Main button
      root: {
        minHeight: "0",
        height: "32px",
        maxHeight: "32px",
        borderRadius: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 20px",
        transition: "0.5s ease",
        boxShadow: "none",
        '&:active': {
          transform: "scale(0.95)",
          boxShadow: "none",
        },
      },
      contained: {
        boxShadow: "none",
        '&:active': {
          boxShadow: "none",
        },
      },
      outlined: {
        borderRadius: "25px",
        '&:hover': {
          backgroundColor: "transparent",
          border: "solid 1px black",
        },
      },
      sizeSmall: {
        fontSize: "10px",
        paddingLeft: "20px",
        paddingRight: "20px",
      },
      sizeLarge: {
        paddingLeft: "30px",
        paddingRight: "30px",
      },
      // Circle button
      fab: {
        backgroundColor:"inherit",
        border: "solid 1px transparent",
        boxShadow: "none",
        maxHeight: "none",
        '&:active': {
          boxShadow: "none",
          backgroundColor:"inherit",
        },
        '&:hover': {
          backgroundColor:"inherit",
          border: "solid 1px rgba(0,0,0,0.6)",
        },
      },
      // Mini button (use only with fab)
      mini: {
        height: "32px",
        width: "32px",
      }
    },
    /* ---------- SnackBar ---------- */
    MuiSnackbar: {
      // Error SnackBar
      anchorOriginTopCenter: {
        marginTop: "65px",
        backgroundColor: "#d32f2f",
        boxShadow: "none",
      },
    },
    MuiSnackbarContent: {
      root: {
        backgroundColor: "transparent",
        borderRadius: "0px!important",
      },
    },
    /* ---------- Tabs ---------- */
    MuiTab: {
      root: {
        minHeight: "56px",
        fontSize: "0.85731933292em",
        borderBottom: "solid 1px lightgrey",
        maxWidth: "none",
        color: "currentColor",
      },
      labelContainer: {
        textAlign: "center",
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: "currentColor",
      },
    },
    /* ---------- Icon ---------- */
    MuiIconButton: {
      root: {
        color: "currentColor",
      },
    },
    /* ---------- Dialog ---------- */
    MuiDialog: {
      paperWidthMd: {
        margin: "0",
        width: "90vw",
      }
    },
    /* ---------- Drawer ---------- */
    MuiDrawer: {
      modal: {
        backgroundColor: "rgba(185, 162, 138, 0.4)",
      },
    },
    /* ---------- Tooltips ---------- */
    MuiTooltip: {
      tooltip: {
        fontFamily: "gotham_htfbook",
        fontSize: "0.85731933292em",
        fontWeight: "500",
        letterSpacing: "1.25px",
        textTransform: "uppercase",
        color: "white",
        backgroundColor: "black",
        padding: "5px",
        paddingBottom: "2px",
      },
    },
  },
  // Property overrides
  props: {
    MuiButtonBase: { // All the buttons
      disableRipple: true,
    }
  },
});

const chattheme = {
    vars: {
        'primary-color': '#427fe1',
        'secondary-color': '#fbfbfb',
        'tertiary-color': '#fff',
        'avatar-border-color': 'black',
    },
    AgentBar: {
        Avatar: {
            size: '32px',
        },
        css: {
            backgroundColor: 'var(--secondary-color)',
            borderColor: 'var(--avatar-border-color)',
        }
    },
    Message: {
        css: {
            fontWeight: 'bold',
        },
    },
}

const store = configureStore(window.__INITIAL_STATE__)
ReactDOM.render(
  <Provider store={store}>
  <ThemeProvider theme={chattheme}>
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  </ThemeProvider>
  </Provider>
,document.getElementById('root'));
registerServiceWorker();
