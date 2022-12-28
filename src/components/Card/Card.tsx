import React from 'react';
import { PostData } from '../../types';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

export function Card({ author, title, previewImage, avatar }: Partial<PostData>) {
  return (
    <li className="card">
      <TextContent avatar={avatar!} author={author!} title={title!} />
      <Preview previewSrc={previewImage!} />
      <Menu />
      <Controls />
    </li>
  );
}
