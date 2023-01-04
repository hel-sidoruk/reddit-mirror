import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Colors, EIcons } from '../../types';
import { BackToTopButton } from './BackToTopButton';
import { IconButton } from './IconButton';
import { Text } from './Text';

interface ModalProps {
  title: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({ title, children, onClose }: ModalProps) => {
  const [scrollToTop, setScrollToTop] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return createPortal(
    <div
      ref={ref}
      className="modal"
      onClick={() => {
        onClose();
        document.body.style.overflow = 'auto';
      }}
      onScroll={(e) => {
        if ((e.target as HTMLDivElement).scrollTop > window.innerHeight && !scrollToTop) {
          setScrollToTop(true);
        }
        if ((e.target as HTMLDivElement).scrollTop < window.innerHeight && scrollToTop) {
          setScrollToTop(false);
        }
      }}
    >
      <div className="modal__header">
        <Text As="p" size={20} color={Colors.white}>
          {title}
        </Text>
        <IconButton color={Colors.white} icon={EIcons.close}>
          Close
        </IconButton>
      </div>
      <div className="modal__content">{children}</div>
      {scrollToTop && <BackToTopButton elemRef={ref} />}
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};
