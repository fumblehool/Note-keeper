import { fromJS } from 'immutable';
import * as types from '../constants/ActionTypes';

const initialState = fromJS({
  isFetching: false,
  isFetchingError: false,
  isFetchedOnce: false,
  userDetails: {},
});

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_USER_DETAILS_INIT:
      return state.merge({
        isFetching: true,
        isFetchingError: false,
      });

    case types.FETCH_USER_DETAILS_FINISHED:
      return state.merge({
        isFetchedOnce: true,
        isFetching: false,
        userDetails: action.data,
      });

      case types.FETCH_USER_DETAILS_ERROR:
      return state.merge({
        isFetchingError: true,
      });  
    default:
      return state;
  }
}
