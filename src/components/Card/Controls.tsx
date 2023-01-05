import React from 'react';
import { CommentButton } from './CommentButton';
import { KarmaCounter } from './KarmaCounter';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';

export function Controls({ score, postID }: { score: number | undefined; postID: string }) {
  return (
    <div className="controls">
      <KarmaCounter postID={postID} score={score || 0} />
      <CommentButton />
      <div className="actions">
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}
