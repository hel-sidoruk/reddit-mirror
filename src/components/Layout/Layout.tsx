import React from 'react';
import styles from './layout.module.scss';

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <div className={styles.layout}>{children}</div>;
}
