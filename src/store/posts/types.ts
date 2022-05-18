import { PostsMapped } from '../../types/Posts'

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
} from './constants'

export interface PostsState {
  error: string | null,
  isFetching: boolean,
  posts: PostsMapped[]
}

export interface FetchPostsFailurePayload {
  error: string;
}

export interface FetchPostsRequest {
  type: typeof FETCH_POSTS_REQUEST;
}

export interface FetchPostsSuccess {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: PostsMapped[];
};

export interface FetchPostsFailure {
  type: typeof FETCH_POSTS_FAILURE;
  payload: FetchPostsFailurePayload;
};

export type PostsActions =
  | FetchPostsRequest
  | FetchPostsSuccess
  | FetchPostsFailure;
