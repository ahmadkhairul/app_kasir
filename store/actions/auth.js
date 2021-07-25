import {
  SET_AUTH_LOADING,
  SET_AUTH_ERROR,
  SET_AUTH_DATA,
  SET_LOGIN_DATA,
} from '../constant';
import instance, { _retrieveData } from '../api';

export const setLoading = (loading = true) => {
  return {
    type: SET_AUTH_LOADING,
    loading,
  };
};

export const setError = (error = true) => {
  return {
    type: SET_AUTH_ERROR,
    error,
  };
};

export const getAuth = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());

      const token = await _retrieveData('token');

      const res = await instance.get(`/auth/${token}`);
      const { data } = res;
      const { user_data } = data;

      dispatch({
        type: SET_AUTH_DATA,
        data: user_data,
      });

      dispatch({
        type: SET_LOGIN_DATA,
        data: user_data,
      });

      dispatch(setLoading(false));
    } catch (error) {

      dispatch({
        type: SET_AUTH_DATA,
        data: {},
      });

      dispatch({
        type: SET_LOGIN_DATA,
        data: {},
      });

      dispatch(setLoading(false));
      dispatch(setError(true));
    }
  };
};

