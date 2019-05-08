import { patch } from '../../utils/request'
import config from '../../utils/config'
import { call, put, takeEvery } from 'redux-saga/effects'
import {
  fetchIdeasSuccess,
  fetchIdeasError,
  FETCH_IDEAS
} from './actions'

export function * fetchIdeas ({ payload }) {
  try {
    const res = yield call(patch, `${config.production_url}/api/search/010/${payload.trending}`)
    yield put(fetchIdeasSuccess(res))
  } catch (error) {
    yield put(fetchIdeasError(error.message))
  }
}

export default function * sagas () {
  yield takeEvery(FETCH_IDEAS, fetchIdeas)
}
