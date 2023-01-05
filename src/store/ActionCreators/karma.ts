import { ActionCreator, Dispatch } from 'redux';
import { ThunkActionType } from '../../types';
import { KarmaAction, KarmaActionsTypes } from '../reducers/karmaReducer';

export const upvotePost =
  (id: string): ThunkActionType =>
  (dispatch: Dispatch<KarmaAction>, getState) => {
    let { upvotedIds, downvotedIds } = getState().karma;
    if (upvotedIds.includes(id)) {
      upvotedIds = upvotedIds.filter((item) => item !== id);
      dispatch({ type: KarmaActionsTypes.UPVOTE, upvotedIds, downvotedIds });
      localStorage.setItem('votedPosts', JSON.stringify({ upvotedIds, downvotedIds }));
      return;
    }
    if (downvotedIds.includes(id)) downvotedIds = downvotedIds.filter((item) => item !== id);
    upvotedIds.push(id);
    localStorage.setItem('votedPosts', JSON.stringify({ upvotedIds, downvotedIds }));
    dispatch({ type: KarmaActionsTypes.UPVOTE, upvotedIds, downvotedIds });
  };

export const downvotePost =
  (id: string): ThunkActionType =>
  (dispatch: Dispatch<KarmaAction>, getState) => {
    let { upvotedIds, downvotedIds } = getState().karma;
    if (downvotedIds.includes(id)) {
      downvotedIds = downvotedIds.filter((item) => item !== id);
      dispatch({ type: KarmaActionsTypes.DOWNVOTE, downvotedIds, upvotedIds });
      localStorage.setItem('votedPosts', JSON.stringify({ upvotedIds, downvotedIds }));
      return;
    }
    if (upvotedIds.includes(id)) upvotedIds = upvotedIds.filter((item) => item !== id);
    downvotedIds.push(id);
    localStorage.setItem('votedPosts', JSON.stringify({ upvotedIds, downvotedIds }));
    dispatch({ type: KarmaActionsTypes.DOWNVOTE, downvotedIds, upvotedIds });
  };

export const getVotedPosts: ActionCreator<KarmaAction> = () => {
  const votedPosts: { upvotedIds: string[]; downvotedIds: string[] } = JSON.parse(
    localStorage.getItem('votedPosts') || '{}'
  );
  return {
    type: KarmaActionsTypes.GET_VOTED_POSTS,
    upvotedIds: votedPosts.upvotedIds || [],
    downvotedIds: votedPosts.downvotedIds || [],
  };
};
