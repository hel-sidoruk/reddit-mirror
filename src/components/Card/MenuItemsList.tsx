import React from 'react';
import { Link } from 'react-router-dom';
import { EIcons } from '../../types';
import { PostData } from '../../types/posts';
import { IconButton } from '../UI/IconButton';

export function MenuItemsList({ post }: { post: PostData }) {
  return (
    <ul className="menuItemsList">
      <li className="menuItem hideMobile">
        <Link to={`posts/${post.id}`}>
          <IconButton icon={EIcons.comments} size={12}>
            Comments
          </IconButton>
        </Link>
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
  );
}
