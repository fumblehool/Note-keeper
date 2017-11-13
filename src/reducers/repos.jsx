import _ from 'lodash';
import { fromJS } from 'immutable';
import * as types from '../constants/ActionTypes';
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
    case types.ADD_NEW_TAG:
      const tagsData = state.get('tags').toJSON();
      tagsData.unshift({
        name: action.tagName,
        count: 0,
      });

      return state.merge({
        tags: tagsData,
      });

    case types.FETCH_TAGS_LIST:
      const reposList = state.get('originalReposList').toJSON();
      const tagList = _.flatten(_.map(reposList, 'tags'));
      const tags = _.uniq(tagList);
      const result = [];
      tags.map((tag) => {
        let count = 0;
        tagList.map((item) => {
          if (item === tag) {
            count += 1;
          }
        });
        const obj = {
          name: tag,
          count,
        };
        result.push(obj);
      });

      return state.merge({
        tags: result,
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

    case types.GET_ALL_REPOS:
      return state.merge({
        isFetchingError: false,
        isFetchedOnce: true,
        originalReposList: repoData,
      });

    case types.SAVE_REPO_TAGS:
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

    case types.SAVE_REPO_TEXT:
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
