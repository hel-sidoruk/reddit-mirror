import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { PostData, PostsState } from '../../types/posts';
import { Card } from '../Card/Card';
import { SkeletonPost } from '../UI/SkeletonPost';
import { NoPostsElement } from './NoPostsElement';

export const Posts = ({ idsArray, text }: { idsArray: string[]; text: string }) => {
  const { postsById, loading } = useSelector<RootState, PostsState>((state) => state.posts);
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    if (!loading) {
      const postsData = idsArray.map((id) => postsById[id]).filter(Boolean);
      setPosts(postsData);
    }
  }, [loading]);

  if (!idsArray) return <NoPostsElement text={text} />;

  return loading ? (
    <ul className="cardsList">
      {Array(idsArray.length)
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
    <NoPostsElement text={text} />
  );
};
