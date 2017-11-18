import * as types from '../constants/ActionTypes';
import userApi from '../api/user';
import api from '../api/api';

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

function parseJSON(response) {
  if (response.json) {
    return response.json();
  }
  return response;
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
        type: types.GET_ALL_REPOS_INIT,
      });
      return api.fetchReposList()
        .then(parseJSON)
        .then((reposList) => {
          dispatch({
            type: types.GET_ALL_REPOS_FINISHED,
            data: reposList,
          });
        })
        .catch((error) => {
          dispatch({
            type: types.GET_ALL_REPOS_ERROR,
            error
          })
        })


    };
  },

  fetchTagsList() {
    return (dispatch) => {
      dispatch({
        type: types.FETCH_TAGS_LIST_FINISHED,
      });
    };
  },

  sortTagsList(order) {
    return (dispatch) => {
      dispatch({
        type: types.SORT_TAGS_LIST,
        order,
      });
    };
  },

  fetchRepoDetails(repoId, repoName) {
    return (dispatch) => {
      dispatch({
        type: types.FETCH_REPO_DETAILS_INIT,
      });

      return api.fetchReadMe(repoName)
        .then(checkStatus)
        .then(res => res.text())
        .then((readMe) => {
          dispatch({
            type: types.FETCH_REPO_DETAILS_FINISHED,
            repoId,
            readMe,
            notes: `sample note for ${repoId}`,
            tags: ['test', 'hello'],
          });
        })
        .catch((error) => {
          dispatch({
            type: types.FETCH_REPO_DETAILS_ERROR,
            error,
          });
        });
    };
  },

  fetchUserDetails() {
    return (dispatch) => {
      dispatch({
        type: types.FETCH_USER_DETAILS_INIT,
      });

      return api.fetchUserDetails()
        .then(checkStatus)
        .then(parseJSON)
        .then((data) => {
          dispatch({
            type: types.FETCH_USER_DETAILS_FINISHED,
            data,
          });
        })
        .catch((error) => {
          dispatch({
            type: types.FETCH_USER_DETAILS_ERROR,
            error,
          });
        });
    };
  },

  saveTags(newTags, tags, repoId) {
    return (dispatch) => {
      dispatch({
        type: types.SAVE_REPO_TAGS_INIT,
      });

      return api.saveRepoTags(newTags, tags, repoId)
        .then(checkStatus)
        .then(parseJSON)
        .then(() => {
          dispatch({
            type: types.SAVE_REPO_TAGS_FINISHED,
            newTags,
            tags,
            repoId,
          });
        })
        .catch((error) => {
          dispatch({
            type: types.SAVE_REPO_TAGS_ERROR,
            error,
          });
        });
    };
  },

  saveText(notes, repoId) {
    return (dispatch) => {
      dispatch({
        type: types.SAVE_REPO_TEXT_INIT,
      });

      return api.saveRepoText(notes, repoId)
        .then(checkStatus)
        .then(parseJSON)
        .then(() => {
          dispatch({
            type: types.SAVE_REPO_TEXT_FINISHED,
            notes,
            repoId,
          });
        })
        .catch((error) => {
          dispatch({
            type: types.SAVE_REPO_TEXT_ERROR,
            error
          });
        });
    };
  },

  clearSaveStatus() {
    return {
      type: types.CLEAR_SAVE_STATUS,
    };
  },
};

export default Actions;
