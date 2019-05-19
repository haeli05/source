// This reducer controls the snackbar which alerts the user of an error
// it is necessary to control the snackbar's open parameter here so that it
// will open automatically when a new error is passed through

const initialState = {
  errorMessage: false,
  errorData: false,
  open: false
}

const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ERROR_CODE': {
      return {
        errorMessage: action.errorMessage,
        errorData: action.errorData,
        open: true
      }
    }
    case 'CLOSE': {
      return {
        errorMessage: state.errorMessage,
        errorData: state.errorData,
        open: false
      }
    }
    default: return state
  }
}

export const getErrorStatus = state => state.error

export default ErrorReducer
