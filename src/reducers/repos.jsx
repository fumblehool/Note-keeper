import { fromJS } from 'immutable';
import * as types from '../constants/ActionTypes';
import _ from 'lodash';

const initialState = fromJS({
  isFetching: false,
  isFetchingError: false,
  isFetchedOnce: false,
  reposList: [],
  originalReposList: [],
  repoDetails: {},
  tags: [],
});

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_REPO_LIST:
      if (action.tag === 'allStars'){
        return state.merge({
          reposList: state.get('originalReposList').toJSON(),
          repoDetails: {}
        })
      } else if (action.tag === 'untagged'){
        const filteredList = state.get('originalReposList').toJSON().filter((repo)=> repo.tags.length === 0)
        return state.merge({
          reposList: filteredList,
          repoDetails: {}
        });  
      }

      const filteredList = state.get('originalReposList').toJSON().filter((repo)=> repo.tags.indexOf(action.tag)!== -1)
      return state.merge({
        reposList: filteredList,
        repoDetails: {}
      });

    case types.FETCH_TAGS_LIST:
      let reposList = state.get('originalReposList').toJSON();
      let tagList = _.flatten(_.map(reposList, 'tags'));
      let tags = _.uniq(tagList);

      let result = [];

      tags.map((tag)=> {
        let count = 0;
        tagList.map((item)=> {
          if (item === tag){
            count = count + 1;
          }
        })
        let obj = {
          'name': tag,
          'count': count
        }
        result.push(obj);
      });

      return state.merge({
        tags: result
      });
    
    case types.GET_ALL_REPOS:
      return state.merge({
        'isFetchingError': false,
        'isFetchedOnce': true,
        'originalReposList': [
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

    case types.FETCH_REPO_DETAILS:

      let repoObject = state.get('originalReposList').toJSON().filter((repo)=> repo.id === action.repoId);
      return state.merge({
        repoDetails: repoObject[0]
      });
    
    case types.SAVE_REPO_TAGS:
      let repoList = state.get('reposList').toJSON()
      repoList.map((repo) => {
        if(repo.id === action.repoId){
          repo.tags = action.tags;
        }
        return repo;
      })

      let originalRepoList = state.get('originalReposList').toJSON()
      originalRepoList.map((repo) => {
        if(repo.id === action.repoId){
          repo.tags = action.tags;
        }
        return repo;
      })

      return state.merge({
        'reposList': repoList,
        'originalReposList': originalRepoList
      });

    case types.SAVE_REPO_TEXT:
      return state.merge({
        'notes': action.notes
      });

    case types.ADD_NEW_TAG:
      const tagsData = state.get('tags').toJSON();
      tagsData.unshift({
        name: action.tagName,
        count: 0,
      })

      return state.merge({
        tags: tagsData,
      });  
      


    default:
      return state;
  }
}
