import { CommentsAction, CommentsActionTypes, CommentsState } from '../../types/comments';

const initialState: CommentsState = {
  comments: [],
  loading: false,
  error: null,
};

export const commentsReducer = (state = initialState, action: CommentsAction): CommentsState => {
  switch (action.type) {
    case CommentsActionTypes.FETCH_COMMENTS:
      return { ...state, loading: true };
    case CommentsActionTypes.FETCH_COMMENTS_SUCCESS:
      return { ...state, loading: false, comments: action.payload };
    case CommentsActionTypes.FETCH_COMMENTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
