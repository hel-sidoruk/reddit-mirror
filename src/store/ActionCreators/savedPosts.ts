import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkActionType } from '../../types';
import { SavedPostsAction, SavedPostsActionsTypes } from '../reducers/savedPostsReducer';

export const savePost =
  (id: string): ThunkActionType =>
  (dispatch: Dispatch<SavedPostsAction>, getState) => {
    const { savedPostIds } = getState().savedPosts;
    if (savedPostIds.includes(id)) return;
    localStorage.setItem('savedPosts', JSON.stringify([...savedPostIds, id]));
    dispatch({ type: SavedPostsActionsTypes.SAVE_POST, payload: [...savedPostIds, id] });
  };

export const unsavePost =
  (id: string): ThunkActionType =>
  (dispatch: Dispatch<SavedPostsAction>, getState) => {
    const { savedPostIds } = getState().savedPosts;
    if (!savedPostIds.includes(id)) return;
    const filteredIds = savedPostIds.filter((postId) => postId !== id);
    localStorage.setItem('savedPosts', JSON.stringify(filteredIds));
    dispatch({ type: SavedPostsActionsTypes.SAVE_POST, payload: filteredIds });
  };

export const getSavedPosts: ActionCreator<AnyAction> = () => {
  const savedPosts: string[] = JSON.parse(localStorage.getItem('savedPosts') || '[]');
  return {
    type: SavedPostsActionsTypes.GET_SAVED_POSTS,
    savedPostIds: savedPosts,
  };
};
