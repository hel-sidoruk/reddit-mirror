import { useEffect, useState } from 'react';

export function useToken() {
  const [token, setToken] = useState('');
  useEffect(() => {
    const url = new URL(location.href);
    const params = Object.fromEntries(new URLSearchParams(url.hash.replace('#', '?')).entries());
    setToken(params.access_token);
  }, []);
  return [token];
}
