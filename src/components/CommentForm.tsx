import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { RootState } from '../store/reducers';

type CommentInput = {
  comment: string;
};

export const CommentForm = ({ text }: { text?: string }) => {
  const comment = useSelector<RootState, string>((state) => state.comment.commentText);
  const { updateComment } = useActions();
  const { handleSubmit, register, setFocus, setValue, watch } = useForm<CommentInput>();
  const onSubmit: SubmitHandler<CommentInput> = (data) => console.log(data);

  useEffect(() => {
    if (text) {
      setValue('comment', text);
      updateComment(text);
      setFocus('comment');
    }
    const subscription = watch(({ comment }) => updateComment(comment));
    return () => subscription.unsubscribe();
  }, [text, setFocus, watch]);

  return (
    <form className="comment-form" onSubmit={handleSubmit(onSubmit)}>
      <textarea {...register('comment')} defaultValue={comment} className="comment-form__input" />
      <button type="submit" className="comment-form__btn">
        Comment
      </button>
    </form>
  );
};
