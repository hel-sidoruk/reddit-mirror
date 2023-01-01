import React, { ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { RootState } from '../store/reducers';

export const CommentForm = ({ text }: { text?: string }) => {
  const comment = useSelector<RootState, string>((state) => state.comment.commentText);
  const { updateComment } = useActions();

  const ref = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (text) {
      updateComment(text);
      ref.current?.focus();
    }
  }, [text, updateComment]);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateComment(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(comment);
  };
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <textarea ref={ref} className="comment-form__input" value={comment} onChange={handleChange} />
      <button type="submit" className="comment-form__btn">
        Comment
      </button>
    </form>
  );
};
