import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import configureStore from '../store'
import Routes from '../routes'

module.exports = function render(initialState) {
  // Model the initial state
  const store = configureStore(initialState)

  let content = renderToString(
    <Provider store={store} >
       <Routes />
    </Provider>
  );
const preloadedState = store.getState()
return {content, preloadedState};
}
