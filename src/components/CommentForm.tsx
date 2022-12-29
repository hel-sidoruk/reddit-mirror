import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';

export const CommentForm = ({ text }: { text?: string }) => {
  const [value, setValue] = useState('');
  const ref = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (text) {
      setValue(text);
      ref.current?.focus();
    }
  }, [text]);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <textarea ref={ref} className="comment-form__input" value={value} onChange={handleChange} />
      <button type="submit" className="comment-form__btn">
        Comment
      </button>
    </form>
  );
};
