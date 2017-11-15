import { combineReducers } from 'redux';
import users from './users';
import repos from './repos';
import user from './user';

const rootReducer = combineReducers({
  users,
  repos,
  user,
  // Something : some-reducer
});

export default rootReducer;
