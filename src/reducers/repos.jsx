import _ from 'lodash';
import { fromJS } from 'immutable';
import * as types from '../constants/ActionTypes';
import { repoData } from '../constants/sample';
import { tagsListNormalizer } from '../utils/Normalizer';

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
    case types.FETCH_TAGS_LIST_FINISHED:
      return state.merge({
        tags: tagsListNormalizer(state.get('originalReposList').toJSON()),
      });


    case types.FETCH_REPO_DETAILS_FINISHED:
      const repoObject = state.get('originalReposList').toJSON().filter(repo => repo.id === action.repoId);
      const rD = repoObject[0];
      rD.readMe = action.readMe;
      rD.tags = action.tags;
      // rD.notes = action.notes;
      return state.merge({
        repoDetails: rD,
      });

    case types.GET_ALL_REPOS_INIT:
      return state.merge({
        'isFetching': true,
        'isFetchingError': false,
      })  

    case types.GET_ALL_REPOS_FINISHED:
      return state.merge({
        isFetchingError: false,
        isFetchedOnce: true,
        isFetching: false,
        originalReposList: action.data,
        tags: tagsListNormalizer(action.data),
      });
    
    case types.GET_ALL_REPOS_ERROR:
      return state.merge({
        isFetchingError: true,
        errorMessage: action.error,
      });

    case types.SAVE_REPO_TAGS_FINISHED:
      const originalRepoList = state.get('originalReposList').toJSON();
      originalRepoList.map((repo) => {
        if (repo.id === action.repoId) {
          repo.tags = action.tags;
        }
        return repo;
      });

      return state.merge({
        originalReposList: originalRepoList,
      });

    case types.SAVE_REPO_TEXT_FINISHED:
      const list = state.get('originalReposList').toJSON();
      list.map((item) => {
        if (item.id === action.repoId) {
          item.notes = action.notes;
        }
      });
      return state.merge({
        originalReposList: list,
      });


    case types.SORT_TAGS_LIST:
      const sortedTagsList = _.orderBy(state.get('tags').toJSON(), 'name', action.order);
      return state.merge({
        tags: sortedTagsList,
      });


    default:
      return state;
  }
}
