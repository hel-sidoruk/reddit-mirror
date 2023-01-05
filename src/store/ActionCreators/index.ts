import * as UserActionCreators from './user';
import * as PostsActionCreators from './posts';
import * as CommentActionCreators from './comment';
import * as TokenActionCreators from './token';
import * as CommentsActionCreators from './comments';
import * as HistoryPostsActionCreators from './historyPosts';
import * as SavedPostsActionCreators from './savedPosts';
import * as KarmaActionCreators from './karma';

export default {
  ...UserActionCreators,
  ...PostsActionCreators,
  ...CommentActionCreators,
  ...TokenActionCreators,
  ...CommentsActionCreators,
  ...HistoryPostsActionCreators,
  ...SavedPostsActionCreators,
  ...KarmaActionCreators,
};
