import React from 'react';
import { PostData } from '../../types/posts';
import { Link } from 'react-router-dom';

export function CardTitle({ post }: { post: PostData }) {
  return (
    <Link to={`/posts/${post.id}`} className="postLink">
      {post.title}
    </Link>
  );
}
