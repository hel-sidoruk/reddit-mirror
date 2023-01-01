import { CommentActionsTypes } from '../../types/comment';
import { ActionCreator, AnyAction } from 'redux';

export const updateComment: ActionCreator<AnyAction> = (text: string) => ({
  type: CommentActionsTypes.updateComment,
  text,
});
