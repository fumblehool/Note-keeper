import Cookies from 'js-cookie';
import ApiConstants from '../constants/ApiConstants';

export const getCookie = (name, options) => {
  // options = assign({}, {
  //   'path': '/',
  //   'domain': ApiConstants.COOKIE_DOMAIN
  // }, options);
  return Cookies.get(name, options);
};

export const setCookie = (name, value, options) => {
  // options = assign({}, {
  //   'path': '/',
  //   'domain': ApiConstants.COOKIE_DOMAIN
  // }, options);
  return Cookies.set(name, value, options);
};

export const removeCookie = (name, options = {}) => {
  // options = assign({}, {
  //   'path': '/',
  //   'domain': ApiConstants.COOKIE_DOMAIN
  // }, options);
  return Cookies.remove(name, options);
};
