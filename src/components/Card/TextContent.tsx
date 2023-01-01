import React from 'react';
import { PostData } from '../../types/posts';
import { DefaultIcon } from '../Icons';
import { CardTitle } from './CardTitle';

export function TextContent({ post }: { post: PostData }) {
  return (
    <div className="textContent">
      <div className="metaData">
        <div className="userLink">
          {post.avatar ? (
            <img src={post.avatar} className="avatar" alt="avatar" />
          ) : (
            <DefaultIcon fill="#CC6633" className="avatar" />
          )}
          <a href="#user-url" className="username">
            {post.author}
          </a>
        </div>
        <span className="createdAt">{post.created}</span>
      </div>
      <CardTitle post={post} />
    </div>
  );
}
