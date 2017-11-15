import fetch from 'isomorphic-fetch';
import ApiConstants from '../constants/ApiConstants';
const { API_HOST } = ApiConstants;

export default {
  fetchReadMe(repoName) {
    return fetch(`https://api.github.com/repos/${repoName}/readme`, {
      headers: {
        Accept: 'application/vnd.github.v3.html',
      },
    });
  },

  fetchReposList() {
    return fetch(`${API_HOST}/api/github/stars`, {
      credentials: 'include',
    });
  },

  fetchUserDetails() {
    return fetch(`${API_HOST}/api/github/user`, {
      credentials: 'include',
    });
  },
};
