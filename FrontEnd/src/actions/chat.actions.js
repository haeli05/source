import Chat from './../utils/chat.js'

/**
* Function logs a user in and creates a local matrix client object
* @param {Object} info - info object containing info.username, and info.password
**/
export function chatLogin (info) {
  return async (dispatch) => {
    let client = new Chat()

    await client.login(info.username, info.password)

    dispatch(saveClient(client))
  }
}

function saveClient (client) {
  return {
    type: 'SAVING_CLIENT',
    client
  }
}

/**
* Function logs a user in and creates a local matrix client object
* @param {Object} info - info object containing info.username, and info.password
**/
export function updateClient (info) {
  return async (dispatch) => {
    let client = new Chat()
    client.login(info.username, info.password)
    dispatch(update(client))
  }
}

function update (client) {
  return {
    type: 'UPDATE_CLIENT',
    client
  }
}

/** Function refreshes a client when a refresh wipes it from state **/
export function refreshChat () {
  return (dispatch) => {
    let chat = JSON.retrocycle(JSON.parse(localStorage.getItem('chat'))).client
    let client = new Chat(chat.access_token, chat.username, chat.deviceId, true)

    dispatch(refresh(client))
  }
}

function refresh (client) {
  return {
    type: 'REFRESHING_CLIENT',
    client
  }
}

export function chatSignOut () {
  // I clear storage here because matrix will add other localStorage variables
  localStorage.clear('chat')
  return (dispatch) => {
    dispatch(addSignOut())
  }
}

function addSignOut () {
  return {
    type: 'SIGN_OUT'
  }
}
