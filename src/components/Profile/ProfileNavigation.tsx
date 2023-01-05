import React from 'react';
import { NavLink } from 'react-router-dom';

const links = ['history', 'saved', 'upvoted', 'downvoted', 'hidden'];

export const ProfileNavigation = () => {
  return (
    <nav className="profile__nav">
      {links.map((link) => (
        <NavLink
          key={link}
          className={({ isActive }) => `profile__link ${isActive ? 'profile__link--active' : ''}`}
          to={`/profile/${link}`}
        >
          {link}
        </NavLink>
      ))}
    </nav>
  );
};
