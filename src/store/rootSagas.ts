import { all, takeLatest } from 'redux-saga/effects'

import { FETCH_POSTS_REQUEST } from './posts/constants'
import { fetchPostsSaga } from './posts/saga'

export default function * rootSaga () {
  yield all([
    takeLatest(FETCH_POSTS_REQUEST, fetchPostsSaga)
  ])
}
