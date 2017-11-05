import { combineReducers } from 'redux';
import users from './users';
import repos from './repos';
import tags from './tags';

const rootReducer = combineReducers({
  users,
  repos,
  tags,
  // Something : some-reducer
});

export default rootReducer;
