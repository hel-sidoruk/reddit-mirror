import * as UserActionCreators from './user';
import * as PostsActionCreators from './posts';
import * as CommentActionCreators from './comment';
import * as TokenActionCreators from './token';
import * as CommentsActionCreators from './comments';

export default {
  ...UserActionCreators,
  ...PostsActionCreators,
  ...CommentActionCreators,
  ...TokenActionCreators,
  ...CommentsActionCreators,
};
