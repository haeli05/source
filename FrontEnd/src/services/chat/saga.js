import { patch } from '../../utils/request'
import { call, put, takeEvery } from 'redux-saga/effects'
import {
  updateAssetsSuccess,
  updateAssetsError,
  UPDATE_ASSETS
} from './actions'

export function * updateAssets ({ payload }) {
  try {
    const res = yield call(patch, `/app/assets/${payload.id}`, payload)
    yield put(updateAssetsSuccess(res))
  } catch (error) {
    yield put(updateAssetsError(error.message))
  }
}

export default function * sagas () {
  yield takeEvery(UPDATE_ASSETS, updateAssets)
}
