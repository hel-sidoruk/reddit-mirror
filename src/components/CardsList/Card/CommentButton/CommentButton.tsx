import React from 'react';
import { EIcons } from '../../../../types';
import { Icon } from '../../../Icon';
import styles from './commentbutton.module.scss';

export function CommentButton() {
  return (
    <button className={styles.commentsButton}>
      <Icon name={EIcons.comments} fill={'#C4C4C4'} />
      <span className={styles.commentsNumber}>14</span>
    </button>
  );
}
