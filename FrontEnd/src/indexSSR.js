//ssr
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

JavascriptTimeAgo.locale(en)

// Main theme for the entire app
const theme = createMuiTheme({
  // Removes all theme shadows
  shadows: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  // Colour palette
  palette: {
    primary: {
      main: "#5E6572", // Blue/grey
    },
    secondary: {
      main: '#843f3f', // Red/grey
    },
    error: {
      main: '#FF0000', // Blood red
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
      fontSize: "4.409em",
      fontFamily: "gotham_htfxlight",
      color: "rgba(0, 0, 0, 1)",
      letterSpacing: "-0.0384615em",
      fontWeight: 400,
    },
    display3: {
      fontSize: "3.75em",
      fontFamily: "gotham_htflight",
      color: "rgba(0, 0, 0, 1)",
      letterSpacing: "-0.003125em",
      fontWeight: 400,
    },
    display2: {
      fontSize: "3em",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 1)",
      letterSpacing: "0",
      fontWeight: 400,
    },
    display1: {
      fontSize: "2.125em",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 1)",
      letterSpacing: "0.015625em",
      fontWeight: 400,
    },
    headline: {
      fontSize: "1.5em",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 1)",
      fontWeight: 400,
    },
    title: {
      fontSize: "1.25em",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 1)",
      letterSpacing: "0.009375em",
      fontWeight: 400,
    },
    subheading: {
      fontSize: "1em",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 1)",
      letterSpacing: "0.15px",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1em",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 1)",
      letterSpacing: "0.4px",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.92307em",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 1)",
      letterSpacing: "1.25px",
      fontWeight: 400,
    },
    button: {
      fontSize: "0.85731933292em",
      fontFamily: "gotham_htfbook",
      color: "rgba(0, 0, 0, 1)",
      letterSpacing: "1.25px",
      fontWeight: 400,
    },
    caption: {
      fontSize: "0.9846153846em",
      fontFamily: "gotham_htfbook",
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
        minHeight: "0",
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
        fontSize: "0.85731933292em",
        borderBottom: "solid 1px lightgrey",
        maxWidth: "none",
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

const store = configureStore(window.__INITIAL_STATE__);

class indexSSR extends Component {
  render() {
    return (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>
  );
}
}
export default indexSSR;
