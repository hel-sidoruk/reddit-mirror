const initialState: HistoryState = {
  postIds: [],
};
export interface HistoryState {
  postIds: string[];
}

export enum HistoryActionsTypes {
  MARK_POST_AS_VIEWED = 'MARK_POST_AS_VIEWED',
  GET_VISITED_POSTS = 'GET_VISITED_POSTS',
}
export interface MarkPostAsViewedAction {
  type: HistoryActionsTypes.MARK_POST_AS_VIEWED;
  payload: string[];
}
export interface GetVisitedPostsAction {
  type: HistoryActionsTypes.GET_VISITED_POSTS;
  postIds: string[];
}

export type HistoryAction = MarkPostAsViewedAction | GetVisitedPostsAction;

export const historyPostsReducer = (state = initialState, action: HistoryAction): HistoryState => {
  switch (action.type) {
    case HistoryActionsTypes.MARK_POST_AS_VIEWED:
      return { ...state, postIds: action.payload };
    case HistoryActionsTypes.GET_VISITED_POSTS:
      return { ...state, postIds: action.postIds };
    default:
      return state;
  }
};
