import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkActionType } from '../../types';
import { HistoryAction, HistoryActionsTypes } from '../reducers/historyPostsReducer';

export const markPostAsViewed =
  (id: string): ThunkActionType =>
  (dispatch: Dispatch<HistoryAction>, getState) => {
    const { postIds } = getState().historyPosts;
    if (postIds.includes(id)) return;
    localStorage.setItem('visitedPosts', JSON.stringify([...postIds, id]));
    dispatch({ type: HistoryActionsTypes.MARK_POST_AS_VIEWED, payload: [...postIds, id] });
  };

export const getVisitedPosts: ActionCreator<AnyAction> = () => {
  const historyInfo: string[] = JSON.parse(localStorage.getItem('visitedPosts') || '[]');
  return {
    type: HistoryActionsTypes.GET_VISITED_POSTS,
    postIds: historyInfo,
  };
};
