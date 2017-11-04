import fetch from 'isomorphic-fetch';

// import ApiConstants from '../constants/ApiConstants';

export default {
  searchUserByAge(age) {
    return fetch(`api/1.0/user/age/${age}`, {
      credentials: 'include',
    });
  },
};
