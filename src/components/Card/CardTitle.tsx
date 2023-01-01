import React, { useState } from 'react';
import { Post } from '../Post';
import { PostData } from '../../types/posts';
import { Modal } from '../UI/Modal';

export function CardTitle({ post }: { post: PostData }) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <>
      <h2 className="title">
        <button
          className="postLink"
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpened(true);
          }}
        >
          {post.title}
        </button>
      </h2>
      {isModalOpened && (
        <Modal title={post.title} onClose={() => setIsModalOpened(false)}>
          <Post post={post} />
        </Modal>
      )}
    </>
  );
}
