import axios from 'axios';

import {
  handleChangeRequestHeader,
  handleConfigureAuth,
  handleAuthError,
  handleGeneralError,
  handleNetworkError
} from './tools';

const instance = axios.create({
  timeout: 12000,
  baseURL: 'https://httpbin.org/'
});

instance.interceptors.request.use((config) => {
  config = handleChangeRequestHeader(config);
  config = handleConfigureAuth(config);
  return config;
});

instance.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      return Promise.reject(response.data);
    }
    handleAuthError(response.data.code);
    handleGeneralError(response.data.code, response.data.msg);
    return response;
  },
  (err) => {
    handleNetworkError(err.response.status);
    return Promise.reject(err.response);
  }
);

export default instance;

interface FcResponse<T> {
  code: number;
  msg: string;
  data: T;
}

interface IAnyObj {
  [index: string]: unknown;
}
type Fn = (data: FcResponse<any>) => unknown;

export type { FcResponse, IAnyObj, Fn };
