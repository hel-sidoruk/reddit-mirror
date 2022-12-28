import React from 'react';
import { CommentButton } from './CommentButton';
import { KarmaCounter } from './KarmaCounter';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';

export function Controls({ score }: { score: number | undefined }) {
  return (
    <div className="controls">
      <KarmaCounter score={score || 0} />
      <CommentButton />
      <div className="actions">
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}
