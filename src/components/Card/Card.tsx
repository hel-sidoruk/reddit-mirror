import React from 'react';
import { PostData } from '../../types/posts';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

export function Card({ post }: { post: PostData }) {
  return (
    <li className="card">
      <TextContent post={post} />
      <Preview previewSrc={post.url} />
      <Menu post={post} />
      <Controls score={post.score} postID={post.id} />
    </li>
  );
}
