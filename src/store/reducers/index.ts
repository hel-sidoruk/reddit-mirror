import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { postsReducer } from './postsReducer';
import { commentReducer } from './commentReducer';
import { tokenReducer } from './tokenReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  comment: commentReducer,
  token: tokenReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
