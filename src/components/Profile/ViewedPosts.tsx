import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { HistoryState } from '../../store/reducers/historyPostsReducer';
import { PostData, PostsState } from '../../types/posts';
import { Card } from '../Card/Card';
import { SkeletonPost } from '../UI/SkeletonPost';
import { NoPostsElement } from './NoPostsElement';

export const ViewedPosts = () => {
  const { postsById, loading } = useSelector<RootState, PostsState>((state) => state.posts);
  const { postIds } = useSelector<RootState, HistoryState>((state) => state.historyPosts);
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    if (!loading) {
      const viewedPosts = postIds.map((id) => postsById[id]).filter(Boolean);
      setPosts(viewedPosts);
    }
  }, [loading]);

  if (!postIds) return <NoPostsElement text="viewed" />;

  return loading ? (
    <ul className="cardsList">
      {Array(postIds.length)
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
    <NoPostsElement text="viewed" />
  );
};
