import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { KarmaState } from '../../store/reducers/karmaReducer';
import { PostData, PostsState } from '../../types/posts';
import { Card } from '../Card/Card';
import { SkeletonPost } from '../UI/SkeletonPost';
import { NoPostsElement } from './NoPostsElement';

export const DownvotedPosts = () => {
  const { postsById, loading } = useSelector<RootState, PostsState>((state) => state.posts);
  const { downvotedIds } = useSelector<RootState, KarmaState>((state) => state.karma);
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    if (!loading) {
      const downvoted = downvotedIds.map((id) => postsById[id]).filter(Boolean);
      setPosts(downvoted);
    }
  }, [loading]);

  if (!downvotedIds) return <NoPostsElement text="downvoted" />;

  return loading ? (
    <ul className="cardsList">
      {Array(downvotedIds.length)
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
    <NoPostsElement text="downvoted" />
  );
};
