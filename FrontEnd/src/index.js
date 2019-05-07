import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import en from 'javascript-time-ago/locale/en'
import JavascriptTimeAgo from 'javascript-time-ago'
import { MuiThemeProvider } from '@material-ui/core/styles'

import store from './store'
import Routes from './routes'
import theme from './utils/theme'
import 'react-time-ago/Tooltip.css'
import runCheck from './utils/expiry.js'
import registerServiceWorker from './utils/registerServiceWorker'

JavascriptTimeAgo.locale(en)
runCheck()

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
