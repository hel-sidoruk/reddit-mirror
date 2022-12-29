import React from 'react';
import { Colors, EIcons } from '../../types';
import { Icon } from '../UI/Icon';
import { Text } from '../UI/Text';

interface MenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: MenuItemsListProps) {
  return (
    <ul className="menuItemsList">
      <li className="menuItem hideMobile" onClick={() => console.log(postId)}>
        <Icon name={EIcons.comments} />
        <Text size={12} color={Colors.grey99}>
          Комментарии
        </Text>
      </li>
      <li className="menuItem hideMobile">
        <Icon name={EIcons.share} />
        <Text size={12} color={Colors.grey99}>
          Поделиться
        </Text>
      </li>
      <li className="menuItem">
        <Icon name={EIcons.block} />
        <Text size={12} color={Colors.grey99}>
          Скрыть
        </Text>
      </li>
      <li className="menuItem hideMobile">
        <Icon name={EIcons.save} />
        <Text size={12} color={Colors.grey99}>
          Сохранить
        </Text>
      </li>
      <li className="menuItem">
        <Icon name={EIcons.warning} />
        <Text size={12} color={Colors.grey99}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}
