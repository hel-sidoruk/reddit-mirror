import React from 'react';
import { Colors } from '../../types';
import { Dropdown } from '../Dropdown';
import { MenuIcon } from '../Icons';
import { Text } from '../UI/Text';
import { MenuItemsList } from './MenuItemsList';

export function Menu({ postId }: { postId: string }) {
  return (
    <div className="menu">
      <Dropdown
        button={
          <button className="menuButton">
            <MenuIcon />
          </button>
        }
      >
        <ul className="dropdown">
          <MenuItemsList postId={postId} />
          <button className="closeButton">
            <Text size={14} mobileSize={12} color={Colors.grey66}>
              Закрыть
            </Text>
          </button>
        </ul>
      </Dropdown>
    </div>
  );
}
