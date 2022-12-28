import React, { useContext } from 'react';
import { userContext } from '../context/userContext';
import { UserBlock } from './UserBlock';

export function SearchBlock() {
  const { avatar, name } = useContext(userContext);

  return (
    <div className="searchBlock">
      <UserBlock avatarSrc={avatar} username={name} />
    </div>
  );
}
