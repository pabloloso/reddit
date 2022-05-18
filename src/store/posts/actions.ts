import { PostsMapped } from 'types/Posts'

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
} from './constants'
import {
  FetchPostsFailurePayload,
  FetchPostsRequest,
  FetchPostsSuccess,
  FetchPostsFailure
} from './types'

export const fetchPostsRequestAction = (): FetchPostsRequest => ({
  type: FETCH_POSTS_REQUEST
})

export const fetchPostsSuccessActions = (payload: PostsMapped[]): FetchPostsSuccess => ({
  type: FETCH_POSTS_SUCCESS,
  payload
})

export const fetchPostsFailureActions = (payload: FetchPostsFailurePayload): FetchPostsFailure => ({
  type: FETCH_POSTS_FAILURE,
  payload
})
