/**
 * Main store function
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import throttle from 'lodash/throttle'
import {loadState,saveState} from './utils/rehydrate'

export function configureStore(initialState = {}) {
      // Middleware and store enhancers
  const enhancers = [
    applyMiddleware(thunk),
  ];

//creates store
  const store = createStore(rootReducer, initialState, compose(...enhancers));

//Persists user state in store
  store.subscribe(throttle(() => {
    let present = loadState();
    let storeUser = store.getState().user;
    console.log(present!=storeUser);
    console.log("present",present);
    console.log("store",storeUser);
    if(storeUser.signed_in && !present) {
      saveState({user: storeUser});
    }
    else if(present){
      saveState({user: present})
    }
  },1000));

  // For hot reloading reducers
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
