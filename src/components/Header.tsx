import React from 'react';
import { SearchBlock } from './SearchBlock';
import { SortBlock } from './SortBlock';
import { ThreadTitle } from './ThreadTitle';

export function Header() {
  return (
    <header className="header">
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}
