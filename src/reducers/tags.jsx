import { fromJS } from 'immutable';
import * as types from '../constants/ActionTypes';

const initialState = fromJS({
  isFetching: false,
  isFetchingError: false,
  tags: [],
});

export default function(state = initialState, action) {
  switch (action.type) {
    case types.Add_NEW_TAG:
      let obj = [{
        name: action.tagName,
        count: 0,
      }];
      return state.merge({
        tags: obj,
      });

    case types.FETCH_TAGS_LIST:
      return state.merge({
        isFetching: false,
        isFetchingError: false,
        tags: [
          {
            name: 'test',
            count: 2,
          },
          {
            name: 'test2',
            count: 3,
          },
        ],
      });

    default:
      return state;
  }
}
