
/**
* File exports functions that loads and saves store to localStorage.
* Currently only user information (signed-in status,jwt) are saved locally
**/
export function loadState () {
  try {
    let user = JSON.parse(localStorage.getItem('user'))
    if (user === null || user.auth === false) {
      user = {
        email: false,
        token: false,
        id: false,
        user: false,
        username: false
      }
      return (dispatch) => {
        dispatch(stateLoaderUser(user))
      }
    } else {
      return (dispatch) => {
        dispatch(stateLoaderUser(user))
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
