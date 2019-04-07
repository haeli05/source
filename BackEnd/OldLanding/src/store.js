/**
 * Main store function
 */
import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './reducers/reducer';
//import throttle from 'lodash/throttle'



export function configureStore(initialState = {}) {
      // Middleware and store enhancers
  const enhancers = [
    applyMiddleware(thunk),
  ];

  //creates store
  const store = createStore(rootReducer, initialState, compose(...enhancers));


  return store;
}
