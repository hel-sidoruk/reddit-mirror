import React from 'react';
import { DefaultIcon } from '../Icons';

export function TextContent({
  author,
  title,
  avatar,
}: {
  author: string;
  title: string;
  avatar: string;
}) {
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
      <h2 className="title">
        <a className="postLink" href="#post-url">
          {title}
        </a>
      </h2>
    </div>
  );
}
