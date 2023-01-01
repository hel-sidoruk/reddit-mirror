import React from 'react';
import { IComment } from '../types';
import { Comment } from './Comment';
import { Loader } from './UI/Loader';
import { nanoid } from 'nanoid';

export const CommentsBlock = ({ comments }: { comments: { data: IComment }[] }) => {
  return (
    <div className="comments">
      {comments.length ? (
        <>
          {comments.map((comment) => {
            if (comment.data.body) return <Comment comment={comment.data} key={nanoid()} />;
          })}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
