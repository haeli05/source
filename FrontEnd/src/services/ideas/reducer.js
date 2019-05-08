import { fromJS } from 'immutable'
import { handleActions } from 'redux-actions'
import {
  fetchIdeas,
  fetchIdeasSuccess,
  fetchIdeasError
} from './actions'

const initialState = fromJS({
  loading: true,
  flash: null
})

const reducer = handleActions(
  {
    [fetchIdeas] (state) {
      return state
        .set('loading', true)
    },
    [fetchIdeasSuccess] (state, { payload }) {
      return state
        .set('loading', false)
        .set('flash', { status: 'success', type: 'info', code: 'fetchSuccess' })
    },
    [fetchIdeasError] (state, { payload }) {
      return state
        .set('loading', false)
        .set('flash', { status: 'error', type: 'danger', msg: payload })
    }
  },
  initialState
)

export default reducer
