import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { RootState } from '../store/reducers';
import { Colors, EIcons } from '../types';
import { Dropdown } from './Dropdown';
import { Angle } from './Icons/Angle';
import { IconButton } from './UI/IconButton';

export function SortBlock() {
  const [sortOption, setSortOption] = useState('Best');
  const token = useSelector<RootState, string>((state) => state.token.token);
  const { fetchPosts, getVisitedPosts, getSavedPosts, getVotedPosts } = useActions();
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();

  function sortByOption(option: string) {
    setSortOption(option);
    fetchPosts(option);
    setSearchParams(`sort=${option}`);
  }

  useEffect(() => {
    const option = searchParams.get('sort');
    option ? sortByOption(option) : fetchPosts();
    getVisitedPosts();
    getSavedPosts();
    getVotedPosts();
  }, [token]);

  if (pathname.startsWith('/profile')) return;
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
            <IconButton handleClick={() => sortByOption('best')} icon={EIcons.best} size={20}>
              Best
            </IconButton>
          </li>
          <li className="menuItem">
            <IconButton handleClick={() => sortByOption('hot')} icon={EIcons.hot} size={20}>
              Hot
            </IconButton>
          </li>
          <li className="menuItem">
            <IconButton handleClick={() => sortByOption('new')} icon={EIcons.new} size={20}>
              New
            </IconButton>
          </li>
          <li className="menuItem">
            <IconButton handleClick={() => sortByOption('top')} icon={EIcons.top} size={20}>
              Top
            </IconButton>
          </li>
          <li className="menuItem">
            <IconButton handleClick={() => sortByOption('rising')} icon={EIcons.long} size={20}>
              Rising
            </IconButton>
          </li>
        </ul>
      </Dropdown>
    </div>
  );
}
