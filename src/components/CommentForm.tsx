import React from 'react';

export const CommentForm = () => {
  return (
    <form className="comment-form">
      <textarea className="comment-form__input" />
      <button type="submit" className="comment-form__btn">
        Send
      </button>
    </form>
  );
};
