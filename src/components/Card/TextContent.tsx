import React from 'react';
import { Link } from 'react-router-dom';
import { PostData } from '../../types/posts';
import { DefaultIcon } from '../Icons';

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
      <Link to={`/posts/${post.id}`} className="postLink">
        {post.title}
      </Link>
    </div>
  );
}
