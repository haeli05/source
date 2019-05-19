import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../store'
import Routes from '../routes'
const state = window.__STATE__
delete window.__STATE__
const store = configureStore(state)

hydrate(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'))
