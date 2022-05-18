import { combineReducers } from 'redux'

import posts from 'store/posts/reducer'

const rootReducer = combineReducers({
  posts
})

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer
