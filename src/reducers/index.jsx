import { combineReducers } from 'redux';
import users from './users';
import repos from './repos';

const rootReducer = combineReducers({
  users,
  repos,
  // Something : some-reducer
});

export default rootReducer;
