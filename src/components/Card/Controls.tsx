import React from 'react';
import { CommentButton } from './CommentButton';
import { KarmaCounter } from './KarmaCounter';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';

export function Controls() {
  return (
    <div className="controls">
      <KarmaCounter />
      <CommentButton />
      <div className="actions">
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}
