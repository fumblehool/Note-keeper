import { fromJS } from 'immutable';
import * as types from '../constants/ActionTypes';

const initialState = fromJS({
  isFetching: false,
  isFetchingError: false,
  reposList: [],
  repoDetails: {},
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
            'tags': ['test', 'test2'],
            'notes': 'sample note',
            'readMe': 'Sample readMe of 1'
          },
          {
            'id': 2,
            'name': 'ES6-for-humans',
            'owner': 'metagrover',
            'description': 'A kickstarter guide to writing ES6',
            'stars': '4283',
            'forks': '226',
            'link': 'https://github.com/metagrover/ES6-for-humans',
            'tags': ['test'],
            'notes': 'sample note',
            'readMe': 'Sample readMe of 2'
          },
        ]
      });

    case types.SAVE_REPO_TAGS:
      let repoList = state.get('reposList').toJSON()
      repoList.map((repo) => {
        if(repo.id === action.repoId){
          repo.tags = action.tags;
        }
        return repo;
      })
      return state.merge({
        'reposList': repoList
      });

    case types.FETCH_REPO_DETAILS:
      let repos = state.get('reposList').toJSON()
      let repo = repos.filter((repo) => {
        return repo.id === action.repoId;
      })
      return state.merge({
        'id': repo.id,
        'tags': repo.tags,
        'notes': repo.notes,
        'readMe': 'Readme of the repo you just clicked. =>' + action.repoId
      });
    
    case types.SAVE_REPO_TEXT:
      return state.merge({
        'notes': action.notes
      });

      


    default:
      return state;
  }
}
