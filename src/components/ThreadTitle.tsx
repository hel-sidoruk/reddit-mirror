import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './UI/Logo';

export function ThreadTitle() {
  return (
    <Link to="/posts" className="threadTitle">
      <Logo />
    </Link>
  );
}
