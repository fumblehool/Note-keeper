import { fromJS } from 'immutable';
import * as types from '../constants/ActionTypes';

const initialState = fromJS({
  isFetching: false,
  isFetchingError: false,
  reposList: [],
});

export default function (state = initialState, action) {
  switch(action.type) {
    case types.GET_ALL_REPOS:
      return state.merge({
        'isFetchingError': false,
        'reposList': [
          {
            'name': 'samples',
            'owner': 'GoogleChrome',
            'description': 'A repo containing samples tied to new functionality in each release of Google Chrome.',
            'stars': '3088',
            'forks': '1206',
            'link': 'https://github.com/GoogleChrome/samples',
            'tags': ['test', 'test2']
          }
        ]
      });

    default:
      return state;
  }
}
