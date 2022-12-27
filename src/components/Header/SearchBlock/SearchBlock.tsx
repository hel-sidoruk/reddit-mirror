import React from 'react';
import styles from './searchblock.module.scss';
import { UserBlock } from './UserBlock';

export function SearchBlock() {
  return (
    <div className={styles.searchBlock}>
      <UserBlock />
    </div>
  );
}
