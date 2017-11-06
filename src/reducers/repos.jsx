import { fromJS } from 'immutable';
import * as types from '../constants/ActionTypes';

const initialState = fromJS({
  isFetching: false,
  isFetchingError: false,
  reposList: [],
});

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_REPO_LIST:
      return state.merge({
        'reposList': action.data
      });

    case types.GET_ALL_REPOS:
      return state.merge({
        'isFetchingError': false,
        'reposList': [
          {
            'id': 1,
            'name': 'samples',
            'owner': 'GoogleChrome',
            'description': 'A repo containing samples tied to new functionality in each release of Google Chrome.',
            'stars': '3088',
            'forks': '1206',
            'link': 'https://github.com/GoogleChrome/samples',
            'tags': ['test', 'test2']
          },
          {
            'id': 2,
            'name': 'ES6-for-humans',
            'owner': 'metagrover',
            'description': 'A kickstarter guide to writing ES6',
            'stars': '4283',
            'forks': '226',
            'link': 'https://github.com/metagrover/ES6-for-humans',
            'tags': ['test']
          },
        ]
      });

    default:
      return state;
  }
}
