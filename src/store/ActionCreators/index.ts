import * as UserActionCreators from './user';
import * as PostsActionCreators from './posts';
import * as CommentActionCreators from './comment';
import * as TokenActionCreators from './token';

export default {
  ...UserActionCreators,
  ...PostsActionCreators,
  ...CommentActionCreators,
  ...TokenActionCreators,
};
