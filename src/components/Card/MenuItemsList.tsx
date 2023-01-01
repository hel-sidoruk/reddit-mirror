import React from 'react';
import { EIcons } from '../../types';
import { IconButton } from '../UI/IconButton';

interface MenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: MenuItemsListProps) {
  return (
    <ul className="menuItemsList">
      <li className="menuItem hideMobile" onClick={() => console.log(postId)}>
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
  );
}
