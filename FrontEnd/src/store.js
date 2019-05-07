/**
 * Main store function
 */
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
// import throttle from 'lodash/throttle'
import { loadState, saveStateUser, saveStateChat } from './utils/rehydrate'

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
    // let presentUser = JSON.parse(localStorage.getItem('user'))
    let storeUser = store.getState().user

    let presentChat = JSON.retrocycle(JSON.parse(localStorage.getItem('chat')))
    let storeChat = store.getState().chat

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
    // console.log("cahtsL ps",presentChat,storeChat);
    if (presentChat === null) {
      saveStateChat(storeChat)
    } else if (
      presentChat.client === false
    ) {
      saveStateChat(storeChat)
    } else if (
      storeChat.client === false
    ) {
      // let client = new Chat(presentChat.client.access_token, presentChat.client.username, presentChat.client.deviceId, true)
    //  store.dispatch({ type:"STATE_LOAD_CHAT" , client  })
    } else if (
      storeChat.client.username !== false &&
      presentChat.client.username === false
    ) {
      saveStateChat(storeChat)
    }
  })

  return store
}
