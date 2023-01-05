import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { HistoryState } from '../../store/reducers/historyPostsReducer';
import { Posts } from './Posts';

export const ViewedPosts = () => {
  const { postIds } = useSelector<RootState, HistoryState>((state) => state.historyPosts);

  return <Posts idsArray={postIds} text="viewed" />;
};
