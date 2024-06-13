import Cookies from 'js-cookie';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: true,
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
  return axiosInstance.get('/sanctum/csrf-cookie');
};

axiosInstance.interceptors.request.use(onRequest, null);

export async function getCurrentUser() {
  return axiosInstance.get('/user');
}
