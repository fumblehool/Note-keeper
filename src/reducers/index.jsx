import { combineReducers } from 'redux';
import users from './users';

const rootReducer = combineReducers({
  users,
  // Something : some-reducer
});

export default rootReducer;
