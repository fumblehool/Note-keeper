import { fromJS } from 'immutable';
import * as types from '../constants/ActionTypes';
import _ from 'lodash';
import { repoData } from '../constants/sample';

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
        'originalReposList': repoData
      });

    case types.FETCH_REPO_DETAILS_FINISHED:
      let repoObject = state.get('originalReposList').toJSON().filter((repo)=> { return repo.id === action.repoId });
      let rD = repoObject[0];
      rD.readMe = action.readMe;
      rD.tags = action.tags;
      rD.notes = action.notes;
      return state.merge({
        repoDetails: rD
      });
    
    case types.SAVE_REPO_TAGS:
      let originalRepoList = state.get('originalReposList').toJSON()
      originalRepoList.map((repo) => {
        if(repo.id === action.repoId){
          repo.tags = action.tags;
        }
        return repo;
      })

      return state.merge({
        'originalReposList': originalRepoList,
      });

    case types.SAVE_REPO_TEXT:
      let list = state.get('originalReposList').toJSON();
      list.map((item)=> { if (item.id === action.repoId) { item.notes = action.notes; }})
      return state.merge({
        'originalReposList': list,
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
