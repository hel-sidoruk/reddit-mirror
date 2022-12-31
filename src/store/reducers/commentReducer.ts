import { CommentAction, CommentActionsTypes, CommentState } from '../../types/comment';

const initialState: CommentState = {
  commentText: 'Hello',
};

export const commentReducer = (state = initialState, action: CommentAction): CommentState => {
  switch (action.type) {
    case CommentActionsTypes.updateComment:
      return { ...state, commentText: action.text };
    default:
      return state;
  }
};
