import { call, put } from 'redux-saga/effects'

import { PostsMapped } from 'types/Posts'

import { fetchPosts } from './request'
import { fetchPostsSuccessActions, fetchPostsFailureActions } from './actions'

export function * fetchPostsSaga () {
  try {
    const response: PostsMapped[] = yield call(fetchPosts)

    yield put(fetchPostsSuccessActions(response))
  } catch (error) {
    yield put(fetchPostsFailureActions({ error: error.message }))
  }
}
