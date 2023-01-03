import { ActionCreator, AnyAction } from 'redux';
import { CommentActionsTypes } from '../reducers/commentReducer';

export const updateComment: ActionCreator<AnyAction> = (text: string) => ({
  type: CommentActionsTypes.updateComment,
  text,
});
