import { UserAction, UserActionTypes } from '../../types/user';
import { Dispatch } from 'redux';
import axios from 'axios';
import { ThunkActionType } from '../../types';

export const fetchUser = (): ThunkActionType => {
  return async (dispatch: Dispatch<UserAction>, getState) => {
    const { token } = getState().token;
    if (token) {
      try {
        dispatch({ type: UserActionTypes.FETCH_USER });
        const { data } = await axios.get('https://oauth.reddit.com/api/v1/me', {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });
        const { name, icon_img } = data;
        dispatch({
          type: UserActionTypes.FETCH_USER_SUCCESS,
          payload: { name, avatar: icon_img.split('?')[0] },
        });
      } catch (err) {
        dispatch({
          type: UserActionTypes.FETCH_USER_ERROR,
          payload: `Ooops...\nThere is an error:\n${err}`,
        });
      }
    }
  };
};
