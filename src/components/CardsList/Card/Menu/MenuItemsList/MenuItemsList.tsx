import React from 'react';
import { Colors, EIcons } from '../../../../../types';
import { Icon } from '../../../../Icon';
import { Text } from '../../../../Text';
import styles from './menuitemslist.module.scss';

interface MenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: MenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={`${styles.menuItem} ${styles.hideMobile}`} onClick={() => console.log(postId)}>
        <Icon name={EIcons.comments} />
        <Text size={12} color={Colors.grey99}>
          Комментарии
        </Text>
      </li>
      <li className={`${styles.menuItem} ${styles.hideMobile}`}>
        <Icon name={EIcons.share} />
        <Text size={12} color={Colors.grey99}>
          Поделиться
        </Text>
      </li>
      <li className={styles.menuItem}>
        <Icon name={EIcons.block} />
        <Text size={12} color={Colors.grey99}>
          Скрыть
        </Text>
      </li>
      <li className={`${styles.menuItem} ${styles.hideMobile}`}>
        <Icon name={EIcons.save} />
        <Text size={12} color={Colors.grey99}>
          Сохранить
        </Text>
      </li>
      <li className={styles.menuItem}>
        <Icon name={EIcons.warning} />
        <Text size={12} color={Colors.grey99}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}
