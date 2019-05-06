'use strict'

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _reactDom = require('react-dom')

var _reactDom2 = _interopRequireDefault(_reactDom)

var _routes = require('./routes')

var _routes2 = _interopRequireDefault(_routes)

var _registerServiceWorker = require('./registerServiceWorker')

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker)

var _reactRedux = require('react-redux')

var _store = require('./store')

var _styles = require('@material-ui/core/styles')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

// Main theme for the entire app

// import { applyMiddleware } from 'redux'
// import rootReducer from './reducers'
var theme = (0, _styles.createMuiTheme)({
  // Colour palette
  palette: {
    primary: {
      main: '#5E6572' // Blue/grey
    },
    secondary: {
      main: '#843f3f' // Red/grey
    },
    error: {
      main: '#B71C1C' // Blood red
    }
  },
  // Fonts
  typography: {
    // Root font
    fontSize: '13px',
    fontFamily: "'gotham_htfbook', 'Arial', sans-serif",
    color: '#231f20',
    fontWeightRegular: 400,
    // Displays 1-4, headline, title, subheading, body1-2, button, caption
    display4: {
      fontSize: '4rem',
      fontFamily: 'gotham_htfxlight',
      color: 'rgba(0, 0, 0, 1)',
      letterSpacing: '-0.09375rem',
      fontWeight: 400
    },
    display3: {
      fontSize: '3.75rem',
      fontFamily: 'gotham_htflight',
      color: 'rgba(0, 0, 0, 1)',
      letterSpacing: '-0.003125rem',
      fontWeight: 400
    },
    display2: {
      fontSize: '3rem',
      fontFamily: 'gotham_htfbook',
      color: 'rgba(0, 0, 0, 1)',
      letterSpacing: '0',
      fontWeight: 400
    },
    display1: {
      fontSize: '2.125rem',
      fontFamily: 'gotham_htfbook',
      color: 'rgba(0, 0, 0, 1)',
      letterSpacing: '0.015625rem',
      fontWeight: 400
    },
    headline: {
      fontSize: '1.5rem',
      fontFamily: 'gotham_htfthin',
      color: 'rgba(0, 0, 0, 1)',
      fontWeight: 400
    },
    title: {
      fontSize: '1.25rem',
      fontFamily: 'gotham_htfmedium',
      color: 'rgba(0, 0, 0, 1)',
      letterSpacing: '0.009375rem',
      fontWeight: 400
    },
    subheading: {
      fontSize: '1rem',
      fontFamily: 'gotham_htfbook',
      color: 'rgba(0, 0, 0, 1)',
      letterSpacing: '0.15px',
      fontWeight: 400
    },
    body1: {
      fontSize: '1rem',
      fontFamily: 'gotham_htflight',
      color: 'rgba(0, 0, 0, 1)',
      letterSpacing: '0.4px',
      fontWeight: 400
    },
    body2: {
      fontSize: '0.92307rem',
      fontFamily: 'gotham_htfbook',
      color: 'rgba(0, 0, 0, 1)',
      letterSpacing: '1.25px',
      fontWeight: 400
    },
    button: {
      fontSize: '0.9rem',
      fontFamily: 'gotham_htfbook',
      color: 'rgba(0, 0, 0, 1)',
      letterSpacing: '1.25px',
      fontWeight: 400
    },
    caption: {
      fontSize: '0.8rem',
      fontFamily: 'gotham_htflight',
      color: 'rgba(0, 0, 0, 1)',
      fontWeight: 400
    }
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
        color: 'black',
        backgroundColor: 'transparent'
      }
    },
    /* ---------- All the buttons ---------- */
    MuiButton: {
      // Main button
      root: {
        borderRadius: '25px',
        paddingLeft: '30px',
        paddingRight: '30px',
        transition: '0.5s ease',
        '&:active': {
          transform: 'scale(0.95)'
        }
      },
      // Raised button
      raised: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none'
        }
      },
      // Outlined button (duh)
      outlined: {
        borderRadius: '25px',
        '&:hover': {
          backgroundColor: 'transparent',
          border: 'solid 1px black'
        }
      },
      // Small button
      sizeSmall: {
        fontSize: '10px',
        paddingLeft: '20px',
        paddingRight: '20px'
      },
      // Large button
      sizeLarge: {
        paddingLeft: '30px',
        paddingRight: '30px'
      }
    },
    /* ---------- Tabs ---------- */
    MuiTab: {
      root: {
        minHeight: '56px',
        fontSize: '0.8rem',
        borderBottom: 'solid 1px lightgrey',
        maxWidth: 'none'
      }
    }
  },
  // Property overrides
  props: {
    MuiButtonBase: { // All the buttons
      disableRipple: true
    }
  }
})
// import thunk from 'redux-thunk';

var store = (0, _store.configureStore)(window.__INITIAL_STATE__)

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _styles.MuiThemeProvider,
    { theme: theme },
    _react2.default.createElement(_routes2.default, null)
  )
), document.getElementById('root'));
(0, _registerServiceWorker2.default)()
