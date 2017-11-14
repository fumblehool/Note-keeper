import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export default function () {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware),
  ); // Reducers
  return store;
}
