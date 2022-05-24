import { testSaga } from 'redux-saga-test-plan'

import { postsMapped } from 'mocks/tests/posts'

import { fetchPosts } from './request'
import { fetchPostsSaga } from './saga'

import { fetchPostsSuccessActions, fetchPostsFailureActions } from './actions'

const action = {
  payload: {
    products: postsMapped
  }
}

describe('fetchPostsSaga saga', () => {
  const saga = fetchPostsSaga
  const request = fetchPosts
  const { payload } = action
  const { products } = payload

  test('should retrieve success action if response status is correct', () => {
    const expected = testSaga(saga)
    const response = postsMapped

    expected
      .next()
      .call(request)
      .next(response)
      .put(fetchPostsSuccessActions(products))
      .next()
      .isDone()
  })

  test('should retrieve failure action if response status give a error', () => {
    const expected = testSaga(saga)

    const errorMessage = 'Random error'
    const error = new Error(errorMessage)

    expected
      .next()
      .call(request)
      .throw(error)
      .put(fetchPostsFailureActions({ error: error.message }))
      .next()
      .isDone()
  })
})
