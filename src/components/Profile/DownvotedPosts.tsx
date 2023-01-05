import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { KarmaState } from '../../store/reducers/karmaReducer';
import { Posts } from './Posts';

export const DownvotedPosts = () => {
  const { downvotedIds } = useSelector<RootState, KarmaState>((state) => state.karma);

  return <Posts idsArray={downvotedIds} text="downvoted" />;
};
