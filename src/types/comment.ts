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
