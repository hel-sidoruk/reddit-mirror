import React from 'react';
import { IconDown, IconUp } from '../Icons';

export function KarmaCounter({ score }: { score: number }) {
  return (
    <div className="karmaCounter">
      <button className="up">
        <IconUp />
      </button>
      <span className="karmaValue">{score}</span>
      <button className="down">
        <IconDown />
      </button>
    </div>
  );
}
