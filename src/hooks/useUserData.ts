import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { tokenContext } from '../context/tokenContext';

interface UserData {
  name?: string;
  avatar?: string;
}

export function useUserData() {
  const [data, setData] = useState<UserData>({});
  const token = useContext(tokenContext);
  useEffect(() => {
    if (token) {
      axios
        .get('https://oauth.reddit.com/api/v1/me', {
          headers: {
            Authorization: `bearer ${token}`,
          },
        })
        .then((res) => {
          const { name, icon_img } = res.data;
          setData({ name, avatar: icon_img.split('?')[0] });
        })
        .catch(console.log);
    }
  }, [token]);
  return [data];
}
