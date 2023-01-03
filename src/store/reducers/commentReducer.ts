const initialState: CommentState = {
  commentText: 'Hello',
};
export interface CommentState {
  commentText: string;
}

export enum CommentActionsTypes {
  updateComment = 'updateComment',
}
export interface CommentAction {
  type: CommentActionsTypes.updateComment;
  text: string;
}

export const commentReducer = (state = initialState, action: CommentAction): CommentState => {
  switch (action.type) {
    case CommentActionsTypes.updateComment:
      return { ...state, commentText: action.text };
    default:
      return state;
  }
};
