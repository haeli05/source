import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {configureStore} from './store'
import { Provider } from 'react-redux'

// Main theme for the entire app
const theme = createMuiTheme({
  // Colour palette
  palette: {
    primary: {
      main: "#5E6572", // Blue/grey
    },
    secondary: {
      main: '#843f3f', // Red/grey
    },
    error: {
      main: '#B71C1C', // Blood red
    },
  },
  // Fonts
  typography: {
    // Root font
    fontSize: "13px",
    fontFamily: "'gotham_htfbook', 'Arial', sans-serif",
    color: "#231f20",
    fontWeightRegular: 400,
    // Displays 1-4, headline, title, subheading, body1-2, button, caption
    display4: {
      fontSize: "6rem",
      fontFamily: "gotham_htfxlight",
      color: "rgba(0, 0, 0, 1)",
      letterSpacing: "-0.09375rem",
      fontWeight: 400,
    },
    display3: {
      fontSize: "3.75rem",
      fontFamily: "gotham_htflight",
      color: "rgba(0, 0, 0, 1)",
      letterSpacing: "-0.003125rem",
      fontWeight: 400,
    },
    display2: {
      fontSize: "3rem",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 1)",
      letterSpacing: "0",
      fontWeight: 400,
    },
    display1: {
      fontSize: "2.125rem",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 1)",
      letterSpacing: "0.015625rem",
      fontWeight: 400,
    },
    headline: {
      fontSize: "1.5rem",
      fontFamily: "gotham_htfthin",
      color: "rgba(0, 0, 0, 1)",
      fontWeight: 400,
    },
    title: {
      fontSize: "1.25rem",
      fontFamily: "gotham_htfmedium",
      color: "rgba(0, 0, 0, 1)",
      letterSpacing: "0.009375rem",
      fontWeight: 400,
    },
    subheading: {
      fontSize: "1rem",
      fontFamily: "gotham_htfmedium",
      color: "rgba(0, 0, 0, 1)",
      letterSpacing: "0.15px",
      fontWeight: 400,
    },
    body1: {
      fontSize: "13px",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 1)",
      letterSpacing: "0px",
      fontWeight: 400,
      lineHeight: "165%",
    },
    body2: {
      fontSize: "0.92307rem",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 1)",
      letterSpacing: "1.25px",
      fontWeight: 400,
    },
    button: {
      fontSize: "0.9rem",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 1)",
      letterSpacing: "1.25px",
      fontWeight: 400,
    },
    caption: {
      fontSize: "0.8rem",
      fontFamily: "gotham_htflight",
      color: "rgba(0, 0, 0, 1)",
      fontWeight: 400,
    },
  },
  /* ========== CSS Overrides ========== */
  overrides: {
    /* ---------- Navbar ---------- */
    MuiAppBar: {
      colorPrimary: {
        // Material makes the navbar's text white when the colour is primary
        // and even though our implementation of the navbar does not have
        // the colour set as primary, it is still inheriting its styles from
        // the primary rules. Don't know why, but this fixes that.
        color: "black",
        backgroundColor: "transparent",
      },
    },
    /* ---------- All the buttons ---------- */
    MuiButton: {
      // Main button
      root: {
        borderRadius: "25px",
        paddingLeft: "30px",
        paddingRight: "30px",
        transition: "0.5s ease",
        '&:active': {
          transform: "scale(0.95)",
        }
      },
      // Raised button
      raised: {
        boxShadow: "none",
        '&:active': {
          boxShadow: "none",
        }
      },
      // Outlined button (duh)
      outlined: {
        borderRadius: "25px",
        '&:hover': {
          backgroundColor: "transparent",
          border: "solid 1px black",
        },
      },
      // Small button
      sizeSmall: {
        fontSize: "10px",
        paddingLeft: "20px",
        paddingRight: "20px",
      },
      // Large button
      sizeLarge: {
        paddingLeft: "30px",
        paddingRight: "30px",
      },
    },
    /* ---------- Tabs ---------- */
    MuiTab: {
      root: {
        minHeight: "56px",
        fontSize: "0.8rem",
        borderBottom: "solid 1px lightgrey",
      }
    },
  },
  // Property overrides
  props: {
    MuiButtonBase: { // All the buttons
      disableRipple: true,
    }
  },
});


const store = configureStore(window.__INITIAL_STATE__)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>
,document.getElementById('root'));
registerServiceWorker();
