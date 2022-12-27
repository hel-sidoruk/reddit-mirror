import React from 'react';
import styles from './content.module.scss';

interface ContentProps {
  children?: React.ReactNode;
}

export function Content({ children }: ContentProps) {
  return <main className={styles.content}>{children}</main>;
}
