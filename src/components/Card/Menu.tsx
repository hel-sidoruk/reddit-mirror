import React from 'react';
import { Colors } from '../../types';
import { Dropdown } from '../Dropdown';
import { MenuIcon } from '../Icons';
import { Text } from '../Text';
import { MenuItemsList } from './MenuItemsList';

export function Menu() {
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
          <MenuItemsList postId="1" />
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
