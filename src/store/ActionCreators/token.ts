import { ActionCreator } from 'redux';
import { TokenAction, UPDATE_TOKEN } from '../reducers/tokenReducer';

interface TokenInfo {
  token: string;
  updated: number;
}

const timeToExpiration = 86400 * 1000;

export const updateToken: ActionCreator<TokenAction> = () => {
  const tokenInfoStorage = localStorage.getItem('tokenInfo') || '';
  if (tokenInfoStorage) {
    const tokenInfo: TokenInfo = JSON.parse(tokenInfoStorage);
    if (Date.now() - tokenInfo.updated < timeToExpiration) {
      return { type: UPDATE_TOKEN, token: tokenInfo.token };
    }
  }

  const hash = new URL(location.href).hash;
  const params = Object.fromEntries(new URLSearchParams(hash.replace('#', '?')).entries());
  if (hash)
    localStorage.setItem(
      'tokenInfo',
      JSON.stringify({ token: params.access_token, updated: Date.now() })
    );

  return {
    type: UPDATE_TOKEN,
    token: params.access_token || '',
  };
};
