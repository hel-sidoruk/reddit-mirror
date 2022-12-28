import React from 'react';
import { EIcons } from '../../types';
import { Icon } from '../Icon';

export function CommentButton() {
  return (
    <button className="commentsButton">
      <Icon name={EIcons.comments} fill={'#C4C4C4'} />
      <span className="commentsNumber">14</span>
    </button>
  );
}
