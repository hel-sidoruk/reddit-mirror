import React, { useContext } from 'react';
import { postsContext } from '../context/postsContext';
import { Card } from './Card/Card';

export function CardsList() {
  const posts = useContext(postsContext);
  return posts.length ? (
    <ul className="cardsList">
      {posts.map(({ author, title, previewImage, id }) => {
        return <Card key={id} author={author} title={title} previewImage={previewImage} />;
      })}
    </ul>
  ) : (
    <h1>Loading</h1>
  );
}
