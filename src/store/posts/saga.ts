import axios from 'axios'
import { call, put } from 'redux-saga/effects'

import { Child, Posts, PostsMapped } from '../../types/Posts'

import { fetchPostsSuccessActions, fetchPostsFailureActions } from './actions'

const mapper = (posts: Child[]): PostsMapped[] => posts.map(post => {
  const { data } = post
  const {
    id,
    thumbnail,
    title,
    author,
    score,
    num_comments: numComments,
    created
  } = data

  return {
    id,
    thumbnail,
    title,
    author,
    score,
    numComments,
    created
  }
})

const fetchPosts = async () => {
  return axios
    .get<Posts>('https://api.reddit.com/r/pics/new.json')
    .then(response => mapper(response.data.data.children))
}

export function * fetchPostsSaga () {
  try {
    const response: PostsMapped[] = yield call(fetchPosts)

    yield put(fetchPostsSuccessActions(response))
  } catch (error) {
    yield put(fetchPostsFailureActions({ error: error.message }))
  }
}
