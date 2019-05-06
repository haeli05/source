import Chat from './chat.js'
/**
* File exports functions that loads and saves store to localStorage.
* Currently only user information (signed-in status,jwt) are saved locally
**/
export function loadState () {
  try {
    let user = JSON.parse(localStorage.getItem('user'))
    let chat = JSON.retrocycle(JSON.parse(localStorage.getItem('chat')))
    if (user === null || user.auth === false) {
      user = {
        email: false,
        token: false,
        id: false,
        user: false,
        username: false
      }
      if (chat === null) { chat = { client: false } }
      return (dispatch) => {
        dispatch(stateLoaderUser(user))
        dispatch(stateLoaderClient(chat))
      }
    } else {
      return (dispatch) => {
        dispatch(stateLoaderUser(user))
        dispatch(stateLoaderClient(chat))
      }
    }
  } catch (err) {
    let user = {
      email: false,
      token: false,
      id: false,
      username: false
    }
    let client = { client: false }
    return (dispatch) => {
      dispatch(
        stateLoaderUser(user),
        stateLoaderClient(client)
      )
    }
  }
}

export function stateLoaderUser (user) {
  return {
    type: 'STATE_LOAD_USER',
    email: user.email,
    token: user.token,
    user: user.user,
    id: user.id,
    username: user.username,
    aws: user.aws
  }
}

export function stateLoaderClient (chat) {
  // console.log("Chat",chat);
  let client = new Chat(chat.client.access_token, chat.client.username, chat.client.deviceId, true)
  return { type: 'STATE_LOAD_CHAT', client }
}

export function saveStateUser (user) {
  if (user.signedInUser.username === undefined) {
    var user2 = {
      username: false,
      token: false,
      id: false,
      user: false
    }
  } else {
    var user2 = user.signedInUser
  }
  try {
    const serializedState = JSON.stringify(user2)
    localStorage.setItem('user', serializedState)
  } catch (err) {
    return null
  }
}

export function saveStateChat (client) {
  try {
    localStorage.setItem('chat', JSON.stringify(JSON.decycle(client)))
  } catch (err) {
    return null
  }
}
// export function stateSaver(auth, token, logout, id, username, user, good) {

export const stateSaver = (token, id, username, email) => {
  return {
    type: 'STATE_SAVE_USER',
    token,
    id,
    username,
    email
  }
}
