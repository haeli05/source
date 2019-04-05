import axios from 'axios';
import history from '../history';
import config from '../utils/config.js';


// Add error code to state
export function addError(error){
  // Recursively search the error for the depeest message since the errors
  // getting returned are so messy it's too hard to do by hand
  if (error.response===undefined) {
    return {
      type: "ADD_ERROR_CODE",
      errorMessage: error.message,
      errorData: error
    }
  } else {
    return {
      type: "ADD_ERROR_CODE",
      errorMessage: recursiveSearchForDeepestMessage(error.response.data, 1).message,
      errorData: error
    }
  }

  /*

  // error.message is the basic message like '400 bad request'
  // it sucks so we have to check if there's a custom message
  console.log(error.response)
  if (error.response.data !== undefined) {
    if (error.response.data.error !== undefined) {
      if (error.response.data.error.errors !== undefined) {
        // oh boy multiple errors!
        if (typeof error.response.data.error.message === 'string') {
          return {
            type: "ADD_ERROR_CODE",
            errorMessage: error.response.data.error.message,
            errorData: error.response
          }
        } else {
          let message;
          for (var prop in error.response.data.error.message) {
            message = prop[0]
            console.log(message)
            break
          }
          return {
            type: "ADD_ERROR_CODE",
            errorMessage: message,
            errorData: error.response
          }
        }
      } else {
        if (typeof error.response.data.error === 'string') {
          return {
            type: "ADD_ERROR_CODE",
            errorMessage: error.response.data.error,
            errorData: error.response
          }
        } else if (error.response.data.error[1] !== undefined) {
          return {
            type: "ADD_ERROR_CODE",
            errorMessage: error.response.data.error[1],
            errorData: error.response
          }
        } else if (typeof error.response.data.error.message === 'string') {
          return {
            type: "ADD_ERROR_CODE",
            errorMessage: error.response.data.error.message,
            errorData: error.response
          }
        } else {
          let message;
          for (var prop in error.response.data.error.message) {
            message = error.response.data.error.message[prop][0]
            break
          }
          return {
            type: "ADD_ERROR_CODE",
            errorMessage: message,
            errorData: error.response
          }
        }
      }
    } else {
      return {
        type: "ADD_ERROR_CODE",
        errorMessage: error.message,
        errorData: error.reponse
      }
    }
  } else {
    return {
      type: "ADD_ERROR_CODE",
      errorMessage: error.message,
      errorData: error.reponse
    }
  }

  */
}

export function recursiveSearchForDeepestMessage(error, depth) {
  // This isn't perfect because sometimes the error parameter is actually
  // more helpful than the message parameter but it's close to impossible
  // to account for every case so this will have to do until the server
  // sends better error reports
  var deepestMessages = []
  for (var object in error) {
    if (typeof error[object] === 'object') {
       var deepMessage = recursiveSearchForDeepestMessage(error[object], depth+1)
       deepestMessages.push(deepMessage)
    } else {
      if (object.includes("message")) {
        var deepMessage = {
          message: error[object],
          depth: depth
        }
        deepestMessages.push(deepMessage)
      }
    }
  }
  var theDeepestMessage = {
    message: '',
    depth: 0,
  }
  for (var i in deepestMessages) {
    if (deepestMessages[i].depth > theDeepestMessage.depth) {
      theDeepestMessage.depth = deepestMessages[i].depth
      theDeepestMessage.message = deepestMessages[i].message
    }
  }
  return theDeepestMessage
}

// Close the snackbar
export function closeSnackBar(){
  return {
    type: "CLOSE"
  }
}
