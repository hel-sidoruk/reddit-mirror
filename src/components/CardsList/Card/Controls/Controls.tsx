import React from 'react';
import { CommentButton } from '../CommentButton';
import { KarmaCounter } from '../KarmaCounter';
import { SaveButton } from '../SaveButton';
import { ShareButton } from '../ShareButton';
import styles from './controls.module.scss';

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <CommentButton />
      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}
