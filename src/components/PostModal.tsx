import React, { useEffect } from 'react';
import { PostsState } from '../types/posts';
import { Modal } from './UI/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { Post } from './Post';
import { useActions } from '../hooks/useActions';

export const PostModal = () => {
  const { id } = useParams();
  const { postsById } = useSelector<RootState, PostsState>((state) => state.posts);
  const navigate = useNavigate();
  const { markPostAsViewed } = useActions();

  useEffect(() => {
    if (id) markPostAsViewed(id);
  }, [id]);

  return (
    <Modal title={`${id && postsById[id] ? postsById[id].title : ''}`} onClose={() => navigate(-1)}>
      {id && <Post post={postsById[id]} postId={id} />}
    </Modal>
  );
};
