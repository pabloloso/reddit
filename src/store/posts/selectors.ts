import { AppState } from 'store/rootReducer'

import { POSTS_STATE } from './constants'

export const getError = (state: AppState) => state[POSTS_STATE].error
export const getIsFetching = (state: AppState) => state[POSTS_STATE].isFetching
export const getPosts = (state: AppState) => state[POSTS_STATE].posts
