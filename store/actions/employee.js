import {
  SET_EMPLOYEE_LOADING,
  SET_EMPLOYEE_LOADING_MORE,
  SET_EMPLOYEE_ERROR,
  SET_EMPLOYEE_DATA
} from '../constant';
import instance, { _retrieveData } from '../api';

export const setLoading = (loading = true) => {
  return {
    type: SET_EMPLOYEE_LOADING,
    loading,
  };
};

export const setLoadingMore = (loading_more = true) => {
  return {
    type: SET_EMPLOYEE_LOADING_MORE,
    loading_more,
  };
};

export const setError = (error = true) => {
  return {
    type: SET_EMPLOYEE_ERROR,
    error,
  };
};

export const getEmployee = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());

      const token = await _retrieveData('token');

      const res = await instance.get("/employees",
        {
          headers: {
            'Content-Type': 'application/json',
            'Token': token
          }
        });

      const { data } = res;

      dispatch({
        type: SET_EMPLOYEE_DATA,
        data,
      });

      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(true));
    }
  };
};

