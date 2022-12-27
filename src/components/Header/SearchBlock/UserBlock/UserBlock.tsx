import React from 'react';
import { Colors } from '../../../../types';
import { IconAnon } from '../../../Icons';
import { Text } from '../../../Text';
import styles from './userblock.module.scss';

interface UserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({ avatarSrc, username }: UserBlockProps) {
  return (
    <div className={styles.userBox}>
      <a
        className={styles.link}
        href="https://www.reddit.com/api/v1/authorize?client_id=bxH8_B34kH4q7m4OaAmBBA&response_type=token&state=random_string&redirect_uri=http://localhost:3000/auth&scope=read submit identity"
      ></a>
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
        ) : (
          <IconAnon />
        )}
      </div>
      <div className={styles.username}>
        <Text size={20} color={username ? Colors.black : Colors.grey99}>
          {username || 'Аноним'}
        </Text>
      </div>
    </div>
  );
}
