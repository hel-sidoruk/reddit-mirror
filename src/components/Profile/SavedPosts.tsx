import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { SavedPostsState } from '../../store/reducers/savedPostsReducer';
import { PostData, PostsState } from '../../types/posts';
import { Card } from '../Card/Card';
import { SkeletonPost } from '../UI/SkeletonPost';
import { NoPostsElement } from './NoPostsElement';

export const SavedPosts = () => {
  const { postsById, loading } = useSelector<RootState, PostsState>((state) => state.posts);
  const { savedPostIds } = useSelector<RootState, SavedPostsState>((state) => state.savedPosts);
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    if (!loading) {
      const savedPosts = savedPostIds.map((id) => postsById[id]).filter(Boolean);
      setPosts(savedPosts);
    }
  }, [loading]);

  if (!savedPostIds) return <NoPostsElement text="saved" />;

  return loading ? (
    <ul className="cardsList">
      {Array(savedPostIds.length)
        .fill(0)
        .map((_, i) => (
          <SkeletonPost key={i} />
        ))}
    </ul>
  ) : posts.length ? (
    <ul className="cardsList">
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </ul>
  ) : (
    <NoPostsElement text="saved" />
  );
};
