import React from 'react';
import { PostsState } from '../types/posts';
import { Modal } from './UI/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { Post } from './Post';

export const PostModal = () => {
  const { id } = useParams();
  const { postsById, loading } = useSelector<RootState, PostsState>((state) => state.posts);
  const navigate = useNavigate();

  return (
    <Modal
      title={`${id && postsById[id] ? postsById[id].title : ''}`}
      onClose={() => navigate('/')}
    >
      {loading ? <div></div> : id && <Post post={postsById[id]} postId={id} />}
    </Modal>
  );
};
