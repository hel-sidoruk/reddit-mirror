import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { KarmaState } from '../../store/reducers/karmaReducer';
import { PostData, PostsState } from '../../types/posts';
import { Card } from '../Card/Card';
import { SkeletonPost } from '../UI/SkeletonPost';
import { NoPostsElement } from './NoPostsElement';

export const UpvotedPosts = () => {
  const { postsById, loading } = useSelector<RootState, PostsState>((state) => state.posts);
  const { upvotedIds } = useSelector<RootState, KarmaState>((state) => state.karma);
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    if (!loading) {
      const upvoted = upvotedIds.map((id) => postsById[id]).filter(Boolean);
      setPosts(upvoted);
    }
  }, [loading]);

  if (!upvotedIds) return <NoPostsElement text="upvoted" />;

  return loading ? (
    <ul className="cardsList">
      {Array(upvotedIds.length)
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
    <NoPostsElement text="upvoted" />
  );
};
