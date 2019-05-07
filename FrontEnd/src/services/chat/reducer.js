import { fromJS } from 'immutable'
import { handleActions } from 'redux-actions'
import {
  updateAssets,
  updateAssetsSuccess,
  updateAssetsError
} from './actions'

const initialState = fromJS({
  loading: true,
  flash: null
})

const reducer = handleActions(
  {
    [updateAssets] (state) {
      return state
        .set('loading', true)
    },
    [updateAssetsSuccess] (state, { payload }) {
      return state
        .set('loading', false)
        .set('flash', { status: 'success', type: 'info', code: 'updateSuccess' })
    },
    [updateAssetsError] (state, { payload }) {
      return state
        .set('loading', false)
        .set('flash', { status: 'error', type: 'danger', msg: payload })
    }
  },
  initialState
)

export default reducer
