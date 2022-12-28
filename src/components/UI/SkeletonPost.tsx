import React from 'react';
import { IconDown, IconUp, MenuIcon } from '../Icons';

export function SkeletonPost() {
  return (
    <li className="card skeleton">
      <div className="textContent">
        <div className="metaData">
          <div className="skeleton__username"></div>
          <div className="skeleton__created"></div>
        </div>
        <div className="skeleton__title"></div>
      </div>
      <div className="skeleton__preview"></div>
      <div className="menu">
        <MenuIcon />
      </div>
      <div className="controls">
        <div className="karmaCounter">
          <button className="up">
            <IconUp />
          </button>
          <span className="karmaValue"></span>
          <button className="down">
            <IconDown />
          </button>
        </div>
      </div>
    </li>
  );
}
