import React from 'react';
import { IconDown, IconUp } from '../Icons';

export function KarmaCounter() {
  return (
    <div className="karmaCounter">
      <button className="up">
        <IconUp />
      </button>
      <span className="karmaValue">232</span>
      <button className="down">
        <IconDown />
      </button>
    </div>
  );
}
