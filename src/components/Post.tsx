import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CommentForm } from './CommentForm';
import { CloseIcon } from './Icons';
import { Text } from './Text';

interface PostProps {
  onClose?: () => void;
  title: string;
  descr: string;
}

export const Post = ({ onClose, title, descr }: PostProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (e.target instanceof Node && !ref.current?.contains(e.target)) onClose?.();
    }
    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, [onClose]);
  return createPortal(
    <div className="modal" ref={ref}>
      <div className="modal__close" onClick={onClose}>
        <CloseIcon />
      </div>
      <Text As="h2" size={28}>
        {title}
      </Text>
      <div className="modal__content">
        <p className="modal__text">{descr}</p>
      </div>
      <CommentForm />
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};
