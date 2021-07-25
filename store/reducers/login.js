import {
  SET_LOGIN_LOADING,
  SET_LOGIN_ERROR,
  SET_LOGIN_DATA
} from '../constant';

const initialState = {
  data: {},
  loading: false,
  error: false,
}

export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_LOADING:
      return {
        ...state,
        loading: action.loading,
        error: false
      };

    case SET_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case SET_LOGIN_DATA:
      return {
        ...state,
        data: action.data ? action.data : initialState.data,
        loading: false,
        error: false,
      };

    default:
      return state;
  }
}