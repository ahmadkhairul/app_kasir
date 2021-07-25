import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import ReduxThunk from 'redux-thunk';
import EmployeeReducer from './reducers/employee';
import AuthReducer from './reducers/auth';
import LoginReducer from './reducers/login';

const rootReducer = combineReducers({
  auth: AuthReducer,
  employee: EmployeeReducer,
  login: LoginReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
