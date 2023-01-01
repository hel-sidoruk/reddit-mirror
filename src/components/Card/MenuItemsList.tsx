import React, { useState } from 'react';
import { EIcons } from '../../types';
import { PostData } from '../../types/posts';
import { Post } from '../Post';
import { IconButton } from '../UI/IconButton';
import { Modal } from '../UI/Modal';

export function MenuItemsList({ post }: { post: PostData }) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <>
      <ul className="menuItemsList">
        <li className="menuItem hideMobile" onClick={() => setIsModalOpened(true)}>
          <IconButton icon={EIcons.comments} size={12}>
            Comments
          </IconButton>
        </li>
        <li className="menuItem hideMobile">
          <IconButton icon={EIcons.share} size={12}>
            Share
          </IconButton>
        </li>
        <li className="menuItem">
          <IconButton icon={EIcons.block} size={12}>
            Hide
          </IconButton>
        </li>
        <li className="menuItem hideMobile">
          <IconButton icon={EIcons.save} size={12}>
            Save
          </IconButton>
        </li>
        <li className="menuItem">
          <IconButton icon={EIcons.warning} size={12}>
            Report
          </IconButton>
        </li>
      </ul>
      {isModalOpened && (
        <Modal title={post.title} onClose={() => setIsModalOpened(false)}>
          <Post post={post} />
        </Modal>
      )}
    </>
  );
}
