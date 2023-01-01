import { ActionCreator, AnyAction } from 'redux';
import { UPDATE_TOKEN } from '../reducers/tokenReducer';

export const updateToken: ActionCreator<AnyAction> = () => {
  const url = new URL(location.href);
  const params = Object.fromEntries(new URLSearchParams(url.hash.replace('#', '?')).entries());

  return {
    type: UPDATE_TOKEN,
    token: params.access_token,
  };
};
