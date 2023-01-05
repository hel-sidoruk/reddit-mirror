import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/reducers';
import { HistoryState } from '../../store/reducers/historyPostsReducer';
import { PostData } from '../../types/posts';
import { DefaultIcon } from '../Icons';

export function TextContent({ post }: { post: PostData }) {
  const { postIds } = useSelector<RootState, HistoryState>((state) => state.historyPosts);
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
      <Link
        to={`/posts/${post.id}`}
        className={`postLink ${postIds.includes(post.id) ? 'visited' : ''}`}
      >
        {post.title}
      </Link>
    </div>
  );
}
