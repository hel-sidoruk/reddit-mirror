import React, { useState } from 'react';
import { Post } from '../Post';
import axios from 'axios';
import { IComment } from '../../types';
import { PostData } from '../../types/posts';

interface CommentsApi {
  data: IComment;
}

export function CardTitle({ post }: { post: PostData }) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [comments, setComments] = useState<CommentsApi[]>([]);
  return (
    <>
      <h2 className="title">
        <button
          className="postLink"
          onClick={(e) => {
            e.stopPropagation();
            axios.get(`http://api.reddit.com/comments/${post.id}`).then(({ data }) => {
              const comments = data[1].data.children;
              setComments(comments);
            });
            setIsModalOpened(true);
          }}
        >
          {post.title}
        </button>
      </h2>
      {isModalOpened && (
        <Post post={post} comments={comments} onClose={() => setIsModalOpened(false)} />
      )}
    </>
  );
}
