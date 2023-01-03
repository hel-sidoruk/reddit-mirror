import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { RootState } from '../store/reducers';
import { Colors, EIcons } from '../types';
import { Dropdown } from './Dropdown';
import { Angle } from './Icons/Angle';
import { IconButton } from './UI/IconButton';

export function SortBlock() {
  const [sortOption, setSortOption] = useState('Best');
  const token = useSelector<RootState, string>((state) => state.token.token);
  const { fetchPosts } = useActions();

  return (
    <div className={`sortBlock ${token ? '' : 'disabled'}`}>
      <Dropdown
        button={
          <div className="sort-dropdown__top">
            <IconButton icon={EIcons.best} size={20} color={Colors.orange}>
              {sortOption}
            </IconButton>
            <Angle />
          </div>
        }
      >
        <ul className="sort-dropdown dropdown">
          <li className="menuItem">
            <IconButton
              handleClick={() => {
                setSortOption('Best');
                fetchPosts('best');
              }}
              icon={EIcons.best}
              size={20}
            >
              Best
            </IconButton>
          </li>
          <li className="menuItem">
            <IconButton
              handleClick={() => {
                setSortOption('Hot');
                fetchPosts('hot');
              }}
              icon={EIcons.hot}
              size={20}
            >
              Hot
            </IconButton>
          </li>
          <li className="menuItem">
            <IconButton
              handleClick={() => {
                setSortOption('New');
                fetchPosts('new');
              }}
              icon={EIcons.new}
              size={20}
            >
              New
            </IconButton>
          </li>
          <li className="menuItem">
            <IconButton
              handleClick={() => {
                setSortOption('Top');
                fetchPosts('top');
              }}
              icon={EIcons.top}
              size={20}
            >
              Top
            </IconButton>
          </li>
          <li className="menuItem">
            <IconButton
              handleClick={() => {
                setSortOption('Rising');
                fetchPosts('rising');
              }}
              icon={EIcons.long}
              size={20}
            >
              Rising
            </IconButton>
          </li>
        </ul>
      </Dropdown>
    </div>
  );
}
