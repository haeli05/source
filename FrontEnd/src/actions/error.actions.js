// Add error code to state
export function addError (error) {
  // Recursively search the error for the depeest message since the errors
  // getting returned are so messy it's too hard to do by hand
  if (error.response === undefined) {
    return {
      type: 'ADD_ERROR_CODE',
      errorMessage: error.message,
      errorData: error
    }
  } else {
    return {
      type: 'ADD_ERROR_CODE',
      errorMessage: recursiveSearchForDeepestMessage(error.response.data, 1).message,
      errorData: error
    }
  }
}

export function recursiveSearchForDeepestMessage (error, depth) {
  // This isn't perfect because sometimes the error parameter is actually
  // more helpful than the message parameter but it's close to impossible
  // to account for every case so this will have to do until the server
  // sends better error reports
  var deepestMessages = []
  for (var object in error) {
    if (typeof error[object] === 'object') {
      let deepMessage = recursiveSearchForDeepestMessage(error[object], depth + 1)
      deepestMessages.push(deepMessage)
    } else {
      if (object.includes('message')) {
        let deepMessage = {
          message: error[object],
          depth: depth
        }
        deepestMessages.push(deepMessage)
      }
    }
  }
  var theDeepestMessage = {
    message: '',
    depth: 0
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
export function closeSnackBar () {
  return {
    type: 'CLOSE'
  }
}
