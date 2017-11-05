import { combineReducers } from 'redux';
import users from './users';
import repos from './repos';
import tags from './tags';
import repoDetails from './repoDetails';

const rootReducer = combineReducers({
  users,
  repos,
  tags,
  repoDetails,
  // Something : some-reducer
});

export default rootReducer;
