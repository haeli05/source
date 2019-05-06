'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.login = undefined
exports.logout = logout
exports.signOut = signOut
exports.inviteCodeCheck = inviteCodeCheck
exports.addInviteCode = addInviteCode
exports.signin = signin
exports.fetchUser = fetchUser
exports.fetchUsers = fetchUsers
exports.fetchUserRepos = fetchUserRepos
exports.addUser = addUser
exports.addRepos = addRepos
exports.protect = protect
exports.handleStar = handleStar
exports.newUser = newUser
exports.updateUserStarred = updateUserStarred

var _axios = require('axios')

var _axios2 = _interopRequireDefault(_axios)

var _history = require('../history')

var _history2 = _interopRequireDefault(_history)

var _config = require('../utils/config.js')

var _config2 = _interopRequireDefault(_config)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

// ec2-35-153-131-45.compute-1.amazonaws.com
/// / TODO: ADD A CONFIG FILE FOR ROUTES
function logout () {
  localStorage.removeItem('user')
  return function (dispatch) {
    dispatch(signOut())
  }
}

function signOut () {
  return {
    type: 'LOGOUT'
  }
}

function inviteCodeCheck (invite) {
  return function (dispatch) {
    _axios2.default.post('http://' + _config2.default.production_url + ':8001/api/user/inviteCodeCheck', invite).then(function (res) {
      if (res.data.result === true) {
        sessionStorage.setItem('alpha', res.data.result)
        return dispatch(addInviteCode(res.data.result))
      } else {
        alert('Incorrect invite code')
        return dispatch(addInviteCode(res.data.result))
      }
    }).catch(function (err) {
      console.log('Error', err); alert('Incorrect invite code')
    })
  }
};

function addInviteCode (good) {
  return {
    type: 'GOOD_BINARY_HUMAN',
    good: good
  }
}

function signin (data) {
  return function (dispatch) {
    _axios2.default.post('http://' + _config2.default.production_url + ':8001/api/user/login', data).then(function (res) {
      _history2.default.push('/source/' + res.data.Data.username)
      return dispatch(login(res.data.Data.token, res.data.Data.username, res.data.Data.email, res.data.Data.id, res.data.Data.user))
    }).catch(function (err) {
      console.log('Error', err); alert('Username or Password Incorrect')
    })
  }
}

var login = exports.login = function login (token, username, email, id, user) {
  return {
    type: 'LOGIN',
    token: token,
    username: username,
    email: email,
    id: id,
    user: user
  }
}

function fetchUser () {
  return function (dispatch) {
    return _axios2.default.post('user').then(function (res) {
      dispatch(addUser(res))
    })
  }
};

function fetchUsers () {
  return function (dispatch) {
    return _axios2.default.post('user').then(function (res) {
      dispatch(addUser(res))
    })
  }
}

function fetchUserRepos () {
  return function (dispatch) {
    return _axios2.default.post('user/repos').then(function (res) {
      dispatch(addRepos(res))
    })
  }
}

function addUser (users) {
  return {
    type: 'ADD_USER',
    users: users
  }
}

function addRepos (repos) {
  return {
    type: 'ADD_REPOS',
    repos: repos
  }
}

function protect (data) {
  var tok = JSON.parse(localStorage.getItem('user'))
  _axios2.default.post('user/tsafe', 'post', { token: tok.data }).then(function (res) {
    console.log(res.message)
  })
}

function handleStar (user, id, repo_id, src_percentage) {
  return function (dispatch) {
    return ('user/' + id + '/star', 'post', { 'repo_id': repo_id, 'src_percentage': src_percentage }).then(function (res) {
      dispatch(fetchUsers(res))
    })
  }
}

function newUser (data) {
  return function (dispatch) {
    _axios2.default.post('http://' + _config2.default.production_url + ':8001/api/user/newuser', data).then(function (res) {
      if (!res.data.Data.error) {
        console.log('RESPONSE', res.data.Data)
        return dispatch(login(res.data.Data.token, res.data.Data.username, res.data.Data.email, res.data.Data.id, res.data.Data.user))
      } else {
        // console.log("error",res.Data.error);
        alert(res.data.Data.error)
      }
    })
  }
};

function updateUserStarred (starred) {
  return {
    type: 'UPDATE_STARS',
    starred: starred
  }
}
