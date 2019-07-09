/**
 * Main store function
 */
import { createStore, applyMiddleware, compose } from 'redux'
import jwtDecode from 'jwt-decode'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
// import throttle from 'lodash/throttle'
import { loadState, saveStateUser } from './utils/rehydrate'

export function configureStore (initialState = {}) {
  // Middleware and store enhancers
  const enhancers = [
    applyMiddleware(thunk)
  ]

  // creates store
  const store = createStore(rootReducer, initialState, compose(...enhancers))
  /// /refresh login token from local storage
  store.dispatch(loadState())

  // Persists user state in store
  store.subscribe(function () {
    let presentUser = JSON.parse(localStorage.getItem('user'))
    let storeUser = store.getState().user

    saveStateUser(storeUser)

    /*
    if (presentUser===null){
      saveStateUser(storeUser);
    }
    else if(
      presentUser.token===false &&
      presentUser.token!==storeUser.token
    ){
      saveStateUser(storeUser);
    }
    */
  })

  return store
}
