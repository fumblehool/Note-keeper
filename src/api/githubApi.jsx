import fetch from 'isomorphic-fetch';

// import ApiConstants from '../constants/ApiConstants';

export default {
  fetchReadMe(repoName) {
    return fetch(`https://api.github.com/repos/${repoName}/readme`, {
      headers: {
        Accept: 'application/vnd.github.v3.raw',
      }
    });
  },
};
