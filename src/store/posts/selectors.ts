import { POSTS_STATE } from './constants'
import { AppState } from '../rootReducer'

export const getError = (state: AppState) => state[POSTS_STATE].error
export const getIsFetching = (state: AppState) => state[POSTS_STATE].isFetching
export const getPosts = (state: AppState) => state[POSTS_STATE].posts
