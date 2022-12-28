import React from 'react';
import { PostData } from '../../types';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

export function Card({ post }: { post: Omit<PostData, 'id'> }) {
  const { avatar, author, title, previewImage, score } = post;
  return (
    <li className="card">
      <TextContent avatar={avatar} author={author} title={title} />
      <Preview previewSrc={previewImage} />
      <Menu />
      <Controls score={score} />
    </li>
  );
}
