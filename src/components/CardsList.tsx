import React, { useContext } from 'react';
import { postsContext } from '../context/postsContext';
import { Card } from './Card/Card';
import { SkeletonPost } from './UI/SkeletonPost';

export function CardsList() {
  const posts = useContext(postsContext);
  return (
    <ul className="cardsList">
      {posts.length
        ? posts.map(({ author, title, previewImage, id }) => (
            <Card key={id} author={author} title={title} previewImage={previewImage} />
          ))
        : Array(10)
            .fill(0)
            .map((_, i) => <SkeletonPost key={i} />)}
    </ul>
  );
}
