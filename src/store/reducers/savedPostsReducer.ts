const initialState: SavedPostsState = {
  savedPostIds: [],
};
export interface SavedPostsState {
  savedPostIds: string[];
}

export enum SavedPostsActionsTypes {
  SAVE_POST = 'SAVE_POST',
  UNSAVE_POST = 'UNSAVE_POST',
  GET_SAVED_POSTS = 'GET_SAVED_POSTS',
}
export interface SavePostAction {
  type: SavedPostsActionsTypes.SAVE_POST;
  payload: string[];
}
export interface UnsavePostAction {
  type: SavedPostsActionsTypes.UNSAVE_POST;
  payload: string[];
}
export interface GetSavedPostsAction {
  type: SavedPostsActionsTypes.GET_SAVED_POSTS;
  savedPostIds: string[];
}

export type SavedPostsAction = SavePostAction | UnsavePostAction | GetSavedPostsAction;

export const savedPostsReducer = (
  state = initialState,
  action: SavedPostsAction
): SavedPostsState => {
  switch (action.type) {
    case SavedPostsActionsTypes.SAVE_POST:
      return { ...state, savedPostIds: action.payload };
    case SavedPostsActionsTypes.UNSAVE_POST:
      return { ...state, savedPostIds: action.payload };
    case SavedPostsActionsTypes.GET_SAVED_POSTS:
      return { ...state, savedPostIds: action.savedPostIds };
    default:
      return state;
  }
};
