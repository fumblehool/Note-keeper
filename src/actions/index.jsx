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

  fetchRepoDetails(repoId) {
    return (dispatch) => {
      dispatch({
        type: types.FETCH_REPO_DETAILS,
        repoId,
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

  saveTags(newTags, tags, repoId) {
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
    return (dispatch) => {
      dispatch({
        type: types.SAVE_REPO_TEXT,
        notes,
      });
    };
  },

};

export default Actions;
