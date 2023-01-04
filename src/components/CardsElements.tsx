import React from 'react';
import { useSelector } from 'react-redux';
import useIntersection from '../hooks/useIntersection';
import { RootState } from '../store/reducers';
import { PostsState } from '../types/posts';
import { Card } from './Card/Card';
import { SkeletonPost } from './UI/SkeletonPost';

export const CardsElements = () => {
  const { posts, loading } = useSelector<RootState, PostsState>((state) => state.posts);
  const [intersectedRef] = useIntersection();

  return (
    <>
      {loading
        ? Array(10)
            .fill(0)
            .map((_, i) => <SkeletonPost key={i} />)
        : posts.map((post) => <Card key={post.id} post={post} />)}
      <li ref={intersectedRef}></li>
    </>
  );
};
