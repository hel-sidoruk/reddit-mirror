const initialState: KarmaState = {
  upvotedIds: [],
  downvotedIds: [],
};
export interface KarmaState {
  upvotedIds: string[];
  downvotedIds: string[];
}

export enum KarmaActionsTypes {
  UPVOTE = 'UPVOTE',
  DOWNVOTE = 'DOWNVOTE',
  GET_VOTED_POSTS = 'GET_VOTED_POSTS',
}
export interface upvoteAction {
  type: KarmaActionsTypes.UPVOTE;
  upvotedIds: string[];
  downvotedIds: string[];
}
export interface downvoteAction {
  type: KarmaActionsTypes.DOWNVOTE;
  upvotedIds: string[];
  downvotedIds: string[];
}
export interface GetKarmaAction {
  type: KarmaActionsTypes.GET_VOTED_POSTS;
  upvotedIds: string[];
  downvotedIds: string[];
}

export type KarmaAction = upvoteAction | downvoteAction | GetKarmaAction;

export const karmaReducer = (state = initialState, action: KarmaAction): KarmaState => {
  switch (action.type) {
    case KarmaActionsTypes.UPVOTE:
      return { ...state, upvotedIds: action.upvotedIds, downvotedIds: action.downvotedIds };
    case KarmaActionsTypes.DOWNVOTE:
      return { ...state, upvotedIds: action.upvotedIds, downvotedIds: action.downvotedIds };
    case KarmaActionsTypes.GET_VOTED_POSTS:
      return { ...state, upvotedIds: action.upvotedIds, downvotedIds: action.downvotedIds };
    default:
      return state;
  }
};
