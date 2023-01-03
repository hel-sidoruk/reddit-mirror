import React from 'react';
import { createPortal } from 'react-dom';
import { Colors, EIcons } from '../../types';
import { IconButton } from './IconButton';
import { Text } from './Text';

interface ModalProps {
  title: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({ title, children, onClose }: ModalProps) => {
  return createPortal(
    <div className="modal" onClick={onClose}>
      <div className="modal__header">
        <Text As="p" size={20} color={Colors.white}>
          {title}
        </Text>
        <IconButton color={Colors.white} icon={EIcons.close}>
          Close
        </IconButton>
      </div>
      <div className="modal__content">{children}</div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};
