import React, { useEffect } from 'react';
import { RootState } from '../store/reducers';
import { Card } from './Card/Card';
import { NotAuthorized } from './UI/NotAuthorized';
import { SkeletonPost } from './UI/SkeletonPost';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { PostsState } from '../types/posts';
import { ErrorMessage } from './UI/ErrorMessage';

export function CardsList() {
  const token = useSelector<RootState, string>((state) => state.token.token);
  const { posts, loading, error } = useSelector<RootState, PostsState>((state) => state.posts);

  const { fetchPosts } = useActions();
  useEffect(() => {
    fetchPosts();
  }, [token]);

  if (error) return <ErrorMessage error={error} />;
  return token ? (
    <ul className="cardsList">
      {loading
        ? Array(10)
            .fill(0)
            .map((_, i) => <SkeletonPost key={i} />)
        : posts.map((post) => <Card key={post.id} post={post} />)}
    </ul>
  ) : (
    <NotAuthorized />
  );
}
