import React from 'react';
import { createPortal } from 'react-dom';
import { Colors, EIcons, IComment } from '../types';
import { CommentForm } from './CommentForm';
import { Text } from './UI/Text';
import { IconButton } from './UI/IconButton';
import { CommentsBlock } from './CommentsBlock';

interface PostProps {
  onClose?: () => void;
  title: string;
  descr: string;
  num: number;
  comments: { data: IComment }[];
}

export const Post = ({ onClose, title, descr, num, comments }: PostProps) => {
  return createPortal(
    <div className="modal" onClick={onClose}>
      <div className="modal__header">
        <Text As="p" size={20} color={Colors.white}>
          {title}
        </Text>
        <IconButton color={Colors.white} icon={EIcons.close}>
          Close
        </IconButton>
      </div>
      <div className="modal__content">
        <div className="post" onClick={(e) => e.stopPropagation()}>
          <div className="post__content">
            <Text As="h1" size={28}>
              {title}
            </Text>
            <Text As="p" size={20}>
              {descr}
            </Text>
            <div className="post__btns">
              <IconButton icon={EIcons.comments}>{num} comments</IconButton>
              <IconButton icon={EIcons.share}>Share</IconButton>
              <IconButton icon={EIcons.block}>Hide</IconButton>
              <IconButton icon={EIcons.save}>Save</IconButton>
              <IconButton icon={EIcons.warning}>Report</IconButton>
            </div>
            <CommentForm />
            <CommentsBlock comments={comments} />
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};
