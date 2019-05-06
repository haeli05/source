'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.configureStore = configureStore

var _redux = require('redux')

var _reduxThunk = require('redux-thunk')

var _reduxThunk2 = _interopRequireDefault(_reduxThunk)

var _reducers = require('./reducers')

var _reducers2 = _interopRequireDefault(_reducers)

var _rehydrate = require('./utils/rehydrate')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Main store function
 */
function configureStore () {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}

  // Middleware and store enhancers
  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)]

  // creates store
  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers))
  /// /refresh login token from local storage
  store.dispatch((0, _rehydrate.loadState)())

  // Persists user state in store
  store.subscribe(function () {
    var presentUser = JSON.parse(localStorage.getItem('user'))
    var storeUser = store.getState().users
    if (presentUser === null) {
      (0, _rehydrate.saveState)(storeUser)
    } else if (presentUser.token === false && presentUser.token !== storeUser.token) {
      (0, _rehydrate.saveState)(storeUser)
    }
  })

  return store
}
// import throttle from 'lodash/throttle'
