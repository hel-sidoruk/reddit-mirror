import React from 'react';
import { PostData } from '../../types/posts';
import { DefaultIcon } from '../Icons';
import { CardTitle } from './CardTitle';

export function TextContent({ post }: { post: PostData }) {
  const { avatar, title, author, id, selftext, num_comments, url } = post;
  return (
    <div className="textContent">
      <div className="metaData">
        <div className="userLink">
          {avatar ? (
            <img src={avatar} className="avatar" alt="avatar" />
          ) : (
            <DefaultIcon fill="#CC6633" className="avatar" />
          )}
          <a href="#user-url" className="username">
            {author}
          </a>
        </div>
        <span className="createdAt">
          <span className="publishedLabel">опубликовано </span>4 часа назад
        </span>
      </div>
      <CardTitle title={title} id={id} url={url} descr={selftext} num={num_comments} />
    </div>
  );
}
