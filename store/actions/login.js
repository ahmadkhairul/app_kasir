import {
  SET_LOGIN_LOADING,
  SET_LOGIN_ERROR,
  SET_LOGIN_DATA,
  SET_AUTH_DATA,
} from '../constant';
import instance, { _sendData } from '../api';

export const setLoading = (loading = true) => {
  return {
    type: SET_LOGIN_LOADING,
    loading,
  };
};

export const setError = (error = true) => {
  return {
    type: SET_LOGIN_ERROR,
    error,
  };
};

export const loginAuth = (params) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());

      const res = await instance.post("/auth", params,
        { headers: { 'Content-Type': 'application/json' } }
      );

      const { data } = res;
      const { user_data, token } = data;

      await _sendData('user', JSON.stringify(user_data));
      await _sendData('token', token);

      dispatch({
        type: SET_LOGIN_DATA,
        data: user_data,
      });

      dispatch({
        type: SET_AUTH_DATA,
        data: user_data,
      });

      dispatch(setLoading(false));
    } catch (error) {

      dispatch({
        type: SET_LOGIN_DATA,
        data: {},
      });

      dispatch({
        type: SET_AUTH_DATA,
        data: {},
      });

      dispatch(setLoading(false));
      dispatch(setError(true));
    }
  };
};

