import axios from 'axios';

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 15000, // request timeout
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent

    return config;
  },
  (error) => {
    // do something with request error
    window.console.log('debug(request): ', error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => response.data,

  (error) => {
    window.console.log('debug(response): ', error); // for debug
    return Promise.reject(error);
  }
);

const httpRequest = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      service
        .get(url, {
          params,
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  post(url, params) {
    return new Promise((resolve, reject) => {
      service
        .post(url, params)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  delete(url, params) {
    return new Promise((resolve, reject) => {
      service
        .delete(url, {
          params,
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  put(url, params) {
    return new Promise((resolve, reject) => {
      service
        .put(url, params)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default httpRequest;
