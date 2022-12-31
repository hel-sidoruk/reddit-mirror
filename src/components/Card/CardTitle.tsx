import React, { useState } from 'react';
import { Post } from '../Post';
import axios from 'axios';
import { IComment } from '../../types';

interface CardTitleProps {
  title: string;
  id: string;
  subreddit: string;
  descr: string;
  num: number;
  url: string;
}

interface CommentsApi {
  data: IComment;
}

export function CardTitle({ url, title, id, subreddit, descr, num }: CardTitleProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [comments, setComments] = useState<CommentsApi[]>([]);
  return (
    <>
      <h2 className="title">
        <button
          className="postLink"
          onClick={(e) => {
            e.stopPropagation();
            axios.get(`http://api.reddit.com/r/${subreddit}/comments/${id}`).then(({ data }) => {
              const comments = data[1].data.children;
              setComments(comments);
            });
            setIsModalOpened(true);
          }}
        >
          {title}
        </button>
      </h2>
      {isModalOpened && (
        <Post
          url={url}
          comments={comments}
          descr={descr}
          num={num}
          title={title}
          onClose={() => setIsModalOpened(false)}
        />
      )}
    </>
  );
}
