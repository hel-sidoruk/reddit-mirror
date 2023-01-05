import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { KarmaState } from '../../store/reducers/karmaReducer';
import { Posts } from './Posts';

export const UpvotedPosts = () => {
  const { upvotedIds } = useSelector<RootState, KarmaState>((state) => state.karma);

  return <Posts idsArray={upvotedIds} text="upvoted" />;
};
