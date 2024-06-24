import Cookies from 'js-cookie';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
  withXSRFToken: true,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
});

const onRequest = (config) => {
  const notSafeMethod =
    config.method == 'post' || config.method == 'put' || config.method == 'delete';
  const token = Cookies.get('XSRF-TOKEN');
  if (notSafeMethod && !token) {
    return setCSRFToken().then((response) => config);
  }
  return config;
};

const setCSRFToken = () => {
  return api.get('/sanctum/csrf-cookie');
};

api.interceptors.request.use(onRequest, null);

export default api;
