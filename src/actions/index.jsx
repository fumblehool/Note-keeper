import * as types from '../constants/ActionTypes';
import userApi from '../api/user';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  return response.json()
    .then((jsonResponse) => {
      const error = new Error('api_error');
      error.response = jsonResponse;
      throw error;
    });
}

const Actions = {
  searchUserByAge(age) {
    return (dispatch) => {
      dispatch({
        type: types.SEARCH_USER_BY_AGE_INIT,
      });

      return userApi.searchUserByAge(age)
        .then(checkStatus)
        .then((userDetails) => {
          dispatch({
            type: types.SEARCH_USER_BY_AGE_SUCCESS,
            data: userDetails,
          });
        })
        .catch((error) => {
          dispatch({
            type: types.SEARCH_USER_BY_AGE_ERROR,
            error,
          });
        });
    };
  },
  refreshRepoList() {
    return (dispatch) => {
      dispatch({
        type: types.GET_ALL_REPOS,
      });
    };
  },

  fetchTagsList() {
    return (dispatch) => {
      dispatch({
        type: types.FETCH_TAGS_LIST,
      });
    };
  },

  fetchRepoList(tag) {
    return (dispatch) => {
      dispatch({
        type: types.FETCH_REPO_LIST,
        'data': [
          {
            'id': 1,
            'name': 'ES6-for-humans',
            'owner': 'metagrover',
            'description': 'A kickstarter guide to writing ES6',
            'stars': '4283',
            'forks': '226',
            'link': 'https://github.com/metagrover/ES6-for-humans',
            'tags': ['test']
          },
          {
            'id': 2,
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
    };
  },

  addNewTag(tagName) {
    return(dispatch) => {
      dispatch({
        type: types.ADD_NEW_TAG,
        tagName,
      });
    };
  },

  fetchRepo(repoId) {
    return (dispatch) => {
      dispatch({
        type: types.FETCH_REPO_DETAILS,
        repoId,
      });
    };
  },

  saveTags(newTags, tags, repoId) {
    console.log('saveTags ==> ' + tags + repoId);
    return (dispatch) => {
      dispatch({
        type: types.SAVE_REPO_TAGS,
        newTags,
        tags,
        repoId,
      });
    };
  },

  saveText(notes, repoId) {
    console.log('saveText ==> ' + notes + repoId);
    return (dispatch) => {
      dispatch({
        type: types.SAVE_REPO_TEXT,
        notes,
      });
    };
  },

};

export default Actions;
