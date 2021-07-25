import {
  SET_AUTH_LOADING,
  SET_AUTH_ERROR,
  SET_AUTH_DATA
} from '../constant';

const initialState = {
  data: {},
  loading: false,
  error: false,
}

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_LOADING:
      return {
        ...state,
        loading: action.loading,
        error: false
      };

    case SET_AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case SET_AUTH_DATA:
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