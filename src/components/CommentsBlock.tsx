import React from 'react';
import { Loader } from './UI/Loader';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { CommentsState } from '../types/comments';
import { Comment } from './Comment';
import { Text } from './UI/Text';
import { Colors } from '../types';
import { MessageIcon } from './Icons';

export const CommentsBlock = () => {
  const { comments, loading, error } = useSelector<RootState, CommentsState>(
    (state) => state.comments
  );

  if (error) return <h1>{error}</h1>;

  return (
    <div className={`comments ${!comments.length || loading ? 'center-items' : ''}`}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {comments.length ? (
            comments.map((comment) => {
              if (comment.body) return <Comment comment={comment} key={nanoid()} />;
            })
          ) : (
            <div className="comments__no-content">
              <MessageIcon />
              <Text As="h3" size={28} color={Colors.grey99}>
                No comments yet
              </Text>
              <Text As="p" size={20} color={Colors.grey99}>
                Be the first to share what you think!
              </Text>
            </div>
          )}
        </>
      )}
    </div>
  );
};
