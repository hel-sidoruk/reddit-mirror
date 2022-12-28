import React, { useContext } from 'react';
import { postsContext } from '../context/postsContext';
import { tokenContext } from '../context/tokenContext';
import { Card } from './Card/Card';
import { NotAuthorized } from './UI/NotAuthorized';
import { SkeletonPost } from './UI/SkeletonPost';

export function CardsList() {
  const posts = useContext(postsContext);
  const token = useContext(tokenContext);
  return token ? (
    <ul className="cardsList">
      {posts.length
        ? posts.map(({ author, title, previewImage, id }) => (
            <Card key={id} author={author} title={title} previewImage={previewImage} />
          ))
        : Array(10)
            .fill(0)
            .map((_, i) => <SkeletonPost key={i} />)}
    </ul>
  ) : (
    <NotAuthorized />
  );
}
