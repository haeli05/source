import { combineReducers } from 'redux'

// Import Reducers
import user from './reducers/user.reducer'
import repos from './reducers/repo.reducer'
import ideas from './reducers/ideas.reducer'
import people from './reducers/people.reducer'
import search from './reducers/search.reducer'
import sourcello from './reducers/sourcello.reducer'
import error from './reducers/error.reducer'
import chat from './reducers/chat.reducer'
// Combine all reducers into one root reducer
export default combineReducers({
  user,
  repos,
  ideas,
  people,
  search,
  sourcello,
  error,
  chat
})
