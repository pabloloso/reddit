import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
} from './constants'
import { PostsActions, PostsState } from './types'

const initialState: PostsState = {
  error: null,
  isFetching: true,
  posts: []
}

const reducer = (state = initialState, action: PostsActions) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true
      }

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.payload
      }

    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isFetching: false
      }

    default:
      return state
  }
}

export default reducer
