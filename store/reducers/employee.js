import {
  SET_EMPLOYEE_LOADING,
  SET_EMPLOYEE_LOADING_MORE,
  SET_EMPLOYEE_ERROR,
  SET_EMPLOYEE_DATA
} from '../constant';

const initialState = {
  data: [],
  loading: true,
  loading_more: false,
  error: false
}

export default function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMPLOYEE_LOADING:
      return {
        ...state,
        loading: action.loading,
        error: false
      };

    case SET_EMPLOYEE_LOADING_MORE:
      return {
        ...state,
        loading_more: action.loading_more,
        error: false,
      };

    case SET_EMPLOYEE_ERROR:
      return {
        ...state,
        loading: false,
        loading_more: false,
        error: action.error,
      };

    case SET_EMPLOYEE_DATA:
      return {
        ...state,
        data: action.data ? action.data : initialState.data,
        loading: false,
        loading_more: false,
        error: false,
      };

    default:
      return state;
  }
}