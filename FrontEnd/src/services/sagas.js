import { fork, all } from 'redux-saga/effects'

import chatSaga from './chat/saga'

function * rootSagas () {
  yield all([
    fork(chatSaga)
  ])
}

export default rootSagas
