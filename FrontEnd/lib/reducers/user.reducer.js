'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
var initialState = {
  good: false,
  token: false,
  logout: false,
  id: false,
  username: false,
  email: false,
  user: false
}

var user = function user () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState
  var action = arguments[1]

  switch (action.type) {
    case 'LOGIN':
      return {
        token: action.token,
        logout: false,
        id: action.id,
        email: action.email,
        username: action.username,
        user: action.user
      }
    case 'LOGOUT':
      return {
        auth: false,
        logout: true,
        token: false
      }
    case 'GOOD_BINARY_HUMAN':
      return {
        good: action.good,
        token: false,
        user: false
      }

    case 'STATE_LOAD':
      return {
        email: action.email,
        token: action.token,
        logout: false,
        user: action.user,
        id: action.id,
        username: action.username
      }
    case 'STATE_SAVE':
      return {
        token: action.token,
        logout: false,
        id: action.id,
        user: action.user,
        username: action.username,
        email: action.email
      }
    case 'UPDATE_STARS':
    {
      return {
        email: state.email,
        token: state.token,
        logout: false,
        id: state.id,
        username: state.username,
        user: action.starred
      }
    }
    default:
      return state
  }
}

var getUser = exports.getUser = function getUser (state) {
  return state.users
}
var getGood = exports.getGood = function getGood (state) {
  return state.users.good
}
exports.default = user

//= =====
