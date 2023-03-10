import React, { useState } from 'react';
import { Colors, EIcons, IComment } from '../types';
import { DefaultIcon } from './Icons';
import { IconButton } from './UI/IconButton';
import { Text } from './UI/Text';
import { nanoid } from 'nanoid';
import { KarmaCounter } from './Card/KarmaCounter';
import { CommentForm } from './CommentForm';

export const Comment = ({ comment }: { comment: IComment; reply?: boolean }) => {
  const [isFormOpen, setisFormOpen] = useState(false);

  return (
    <div className="comment">
      <KarmaCounter />
      <div className="comment__content">
        <div className="comment__author">
          <DefaultIcon className="comment__avatar" fill="#cc6633" />
          <Text size={14} color={Colors.orange}>
            {comment.author}
          </Text>
        </div>
        <Text As="p" size={14}>
          {comment.body}
        </Text>
        <div className="comment__btns">
          <IconButton handleClick={() => setisFormOpen(!isFormOpen)} icon={EIcons.comments}>
            {isFormOpen ? 'Close form' : 'Reply'}
          </IconButton>
          <IconButton icon={EIcons.share}>Share</IconButton>
          <IconButton icon={EIcons.warning}>Report</IconButton>
        </div>
      </div>
      {isFormOpen && <CommentForm text={`${comment.author}, `} />}
      {comment.replies && (
        <div className="comment__replies">
          {comment.replies.data.children.map((comment) => {
            if (comment.data.body) return <Comment key={nanoid()} comment={comment.data} />;
          })}
        </div>
      )}
    </div>
  );
};
