import _ from 'lodash';
import { fromJS } from 'immutable';
import * as types from '../constants/ActionTypes';
import { tagsListNormalizer } from '../utils/Normalizer';

const initialState = fromJS({
  isFetching: false,
  isFetchingError: false,
  isFetchedOnce: false,
  originalReposList: {
    isFetching: false,
    isFetchedOnce: false,
    isFetchingError: false,
    reposList: [],
  },
  repoDetails: {},
  tags: [],
  saveRepoText: {
    errorMessage: '',
    isSending: false,
    status: '',
  },
  saveRepoTags: {
    errorMessage: '',
    isSending: false,
    status: '',
  },
});

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_TAGS_LIST_FINISHED:
      return state.merge({
        tags: tagsListNormalizer(state.getIn(['originalReposList', 'reposList']).toJSON()),
      });


    case types.FETCH_REPO_DETAILS_FINISHED:
      const repoObject = state.getIn(['originalReposList', 'reposList']).toJSON().filter(repo => repo.id === action.repoId);
      const rD = repoObject[0];
      rD.readMe = action.readMe;
      rD.tags = action.tags;
      return state.merge({
        repoDetails: rD,
      });

    case types.GET_ALL_REPOS_INIT:
      return state.merge({
        'isFetching': true,
        'isFetchingError': false,
      });

    case types.GET_ALL_REPOS_FINISHED:
      return state.merge({
        originalReposList: {
          isFetching: false,
          isFetchedOnce: true,
          isFetchingError: false,
          reposList: action.data
        },
        tags: tagsListNormalizer(action.data),
      });
    
    case types.GET_ALL_REPOS_ERROR:
      return state.merge({
        originalReposList: {
          isFetching: false,
          isFetchingError: true,
          errorMessage: action.error,
        }
      });

    case types.SAVE_REPO_TAGS_INIT:
      return state.merge({
        saveRepoTags: {
          isSending: true,
        }
      });

    case types.SAVE_REPO_TAGS_FINISHED:
      const originalRepoList = state.getIn(['originalReposList', 'reposList']).toJSON();
      originalRepoList.map((repo) => {
        if (repo.id === action.repoId) {
          repo.tags = action.tags;
        }
        return repo;
      });

      return state.merge({
        originalReposList: {
          reposList: originalRepoList
        }
      });
    
    case types.SAVE_REPO_TAGS_ERROR:
      return state.merge({
        errorMessage: action.error,
      });    

    case types.SAVE_REPO_TEXT_INIT:
      return state.merge({
        saveRepoText: {
          isSending: true,
        },
      });

    case types.SAVE_REPO_TEXT_FINISHED:
      const list = state.getIn(['originalReposList', 'reposList']).toJSON();
      list.map((item) => {
        if (item.id === action.repoId) {
          item.notes = action.notes;
        }
      });
      return state.merge({
        originalReposList: {
          reposList: list
        },
        saveRepoText: {
          isSending: false,
          status: 'Saved',
        }
      });

    case types.CLEAR_SAVE_STATUS:
      return state.merge({
        saveRepoText: {
          isSending: false,
          status: '',
          errorMessage: '',
        },
      });

    case types.SAVE_REPO_TEXT_ERROR:
      return state.merge({
        errorMessage: action.error,
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
