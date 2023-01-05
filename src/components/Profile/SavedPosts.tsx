import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { SavedPostsState } from '../../store/reducers/savedPostsReducer';
import { Posts } from './Posts';

export const SavedPosts = () => {
  const { savedPostIds } = useSelector<RootState, SavedPostsState>((state) => state.savedPosts);

  return <Posts idsArray={savedPostIds} text="saved" />;
};
