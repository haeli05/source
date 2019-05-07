import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import registerServiceWorker from './utils/registerServiceWorker'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import theme from './utils/theme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import 'react-time-ago/Tooltip.css'
import runCheck from './utils/expiry.js'

JavascriptTimeAgo.locale(en)
runCheck()

const store = configureStore(window.__INITIAL_STATE__)
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
