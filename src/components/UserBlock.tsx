import React, { useEffect } from 'react';
import { Colors } from '../types';
import { DefaultIcon } from './Icons';
import { Text } from './UI/Text';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { RootState } from '../store/reducers';
import { UserState } from '../types/user';

export function UserBlock() {
  const token = useSelector<RootState, string>((state) => state.token.token);
  const { user } = useSelector<RootState, UserState>((state) => state.user);
  const { fetchUser } = useActions();
  useEffect(() => {
    fetchUser();
  }, [token]);

  return (
    <div className="userBox">
      <a
        className="link"
        href="https://www.reddit.com/api/v1/authorize?client_id=bxH8_B34kH4q7m4OaAmBBA&response_type=token&state=random_string&redirect_uri=http://localhost:3000/auth&scope=read submit identity"
      ></a>
      <div className="avatarBox">
        {user.avatar ? (
          <img src={user.avatar} alt="user avatar" className="avatarImage" />
        ) : (
          <DefaultIcon />
        )}
      </div>
      <div className="username">
        <Text size={20} color={user.name ? Colors.black : Colors.grey99}>
          {user.name || 'Anonimous'}
        </Text>
      </div>
    </div>
  );
}
