import React from 'react';
import { Colors } from '../types';
import { DefaultIcon } from './Icons';
import { Text } from './UI/Text';

interface UserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({ avatarSrc, username }: UserBlockProps) {
  return (
    <div className="userBox">
      <a
        className="link"
        href="https://www.reddit.com/api/v1/authorize?client_id=bxH8_B34kH4q7m4OaAmBBA&response_type=token&state=random_string&redirect_uri=http://localhost:3000/auth&scope=read submit identity"
      ></a>
      <div className="avatarBox">
        {avatarSrc ? (
          <img src={avatarSrc} alt="user avatar" className="avatarImage" />
        ) : (
          <DefaultIcon />
        )}
      </div>
      <div className="username">
        <Text size={20} color={username ? Colors.black : Colors.grey99}>
          {username || 'Anonimous'}
        </Text>
      </div>
    </div>
  );
}
