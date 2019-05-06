'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _redux = require('redux')

var _user = require('./reducers/user.reducer')

var _user2 = _interopRequireDefault(_user)

var _repo = require('./reducers/repo.reducer')

var _repo2 = _interopRequireDefault(_repo)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

// Combine all reducers into one root reducer

// Import Reducers
exports.default = (0, _redux.combineReducers)({
  users: _user2.default,
  repos: _repo2.default
})
