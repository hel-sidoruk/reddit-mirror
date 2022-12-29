import React, { useState } from 'react';
import { Post } from '../Post';
import axios from 'axios';

interface CardTitleProps {
  title: string;
  id: string;
  subreddit: string;
  descr: string;
}

export function CardTitle({ title, id, subreddit, descr }: CardTitleProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <>
      <h2 className="title">
        <button
          className="postLink"
          onClick={(e) => {
            e.stopPropagation();
            axios.get(`http://api.reddit.com/r/${subreddit}/comments/${id}`).then(({ data }) => {
              const postData = data[0].data.children[0].data;
              const comments = data[1];
            });
            // axios.get(`http://api.reddit.com/r/best`).then((res) => {
            //   console.log(res);
            // });
            setIsModalOpened(true);
          }}
        >
          {title}
        </button>
      </h2>
      {isModalOpened && (
        <Post descr={descr} title={title} onClose={() => setIsModalOpened(false)} />
      )}
    </>
  );
}
