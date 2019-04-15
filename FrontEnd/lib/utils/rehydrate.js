"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadState = loadState;
exports.stateLoader = stateLoader;
exports.saveState = saveState;
/**
File exports functions that loads and saves store to localStorage.
Currently only user information (signed-in status,jwt) are saved locally
**/

function loadState() {
  try {
    var user = JSON.parse(localStorage.getItem('user'));
    if (user === null || user.auth === false) {
      user = {
        email: false,
        token: false,
        id: false,
        user: false,
        username: false
      };
      return function (dispatch) {
        dispatch(stateLoader(user));
      };
    } else {
      return function (dispatch) {
        dispatch(stateLoader(user));
      };
    }
  } catch (err) {
    var _user = {
      email: false,
      token: false,
      id: false,
      username: false
    };
    console.log("EREER", err);
    return function (dispatch) {
      dispatch(stateLoader(_user));
    };
  }
}

function stateLoader(user) {
  return {
    type: "STATE_LOAD",
    email: user.email,
    token: user.token,
    user: user.user,
    id: user.id,
    username: user.username
  };
}

function saveState(user) {
  try {
    //const user = JSON.parse(localStorage.getItem('userobj'));
    var serializedState = JSON.stringify(user);
    localStorage.setItem('user', serializedState);
  } catch (err) {
    return null;
  }
}

//export function stateSaver(auth, token, logout, id, username, user, good) {

var stateSaver = exports.stateSaver = function stateSaver(token, id, username, email) {
  return {
    type: "STATE_SAVE",
    token: token,
    id: id,
    username: username,
    email: email
  };
};