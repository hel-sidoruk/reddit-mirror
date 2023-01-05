import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { postsReducer } from './postsReducer';
import { commentReducer } from './commentReducer';
import { tokenReducer } from './tokenReducer';
import { commentsReducer } from './commentsReducer';
import { historyPostsReducer } from './historyPostsReducer';
import { savedPostsReducer } from './savedPostsReducer';
import { karmaReducer } from './karmaReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  comment: commentReducer,
  token: tokenReducer,
  comments: commentsReducer,
  historyPosts: historyPostsReducer,
  savedPosts: savedPostsReducer,
  karma: karmaReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
