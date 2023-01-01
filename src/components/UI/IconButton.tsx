import React from 'react';
import { Colors, EIcons } from '../../types';
import { Icon } from './Icon';
import { Text } from './Text';

interface IconButtonProps {
  icon: EIcons;
  color?: Colors;
  handleClick?: () => void;
  children: React.ReactNode;
  size?: 28 | 20 | 16 | 14 | 12 | 10;
}

export const IconButton = ({ icon, color, children, handleClick, size }: IconButtonProps) => {
  return (
    <button className="icon-btn" onClick={handleClick}>
      <Icon name={icon} />
      <Text size={size || 14} color={color || Colors.grey99}>
        {children}
      </Text>
    </button>
  );
};
