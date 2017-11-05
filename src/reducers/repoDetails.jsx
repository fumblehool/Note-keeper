import { fromJS } from 'immutable';
import * as types from '../constants/ActionTypes';

const initialState = fromJS({
  'isFetching': false,
  'isFetchingError': false,
  'tags': [],
  'note': '',
  'readMe': ''
})


export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_REPO_DETAILS:
      return state.merge({
        'tags': [
          'test',
          'test2'
        ],
        'note': 'sample note',
        'readMe': 'Readme of the repo you just clicked. =>' + action.repoId
      });

    default:
      return state;
  }
}
