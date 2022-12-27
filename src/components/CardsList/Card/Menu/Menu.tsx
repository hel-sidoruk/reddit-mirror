import React from 'react';
import { Dropdown } from '../../../Dropdown';
import styles from './menu.module.scss';
import { MenuIcon } from '../../../Icons';
import { Text } from '../../../Text';
import { Colors } from '../../../../types';
import { MenuItemsList } from './MenuItemsList';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
      >
        <ul className={styles.dropdown}>
          <MenuItemsList postId="1" />
          <button className={styles.closeButton}>
            <Text size={14} mobileSize={12} color={Colors.grey66}>
              Закрыть
            </Text>
          </button>
        </ul>
      </Dropdown>
    </div>
  );
}
