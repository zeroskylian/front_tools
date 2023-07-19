import { InternalAxiosRequestConfig } from 'axios';
import commonHeader from './header';
// import store from '@/app/store';
class Message {
  error(msg: any) {
    console.error(msg);
  }
}

export const message = new Message();

export const handleChangeRequestHeader = (
  config: InternalAxiosRequestConfig<any>
) => {
  for (const [key, value] of commonHeader) {
    config.headers.set(key, value);
  }
  return config;
};

export const handleConfigureAuth = (
  config: InternalAxiosRequestConfig<any>
) => {
  // 如果需要判断用户登录

  // if (
  //   store.getState().auth.isLogin &&
  //   store.getState().auth.auth?.accessToken
  // ) {
  //   config.headers.Authorization =
  //     'Bearer' + store.getState().auth.auth?.accessToken;
  // } else {
  //   // 如果登录了就用 bearer
  //   config.headers.Authorization =
  //     'Basic M2VjZjUyYmYyM2ZmNGFiOWI4MzkwN2I0OTY4ZjFmYjM6OTAxZjMyMzJlZDFlNGIyMTlkMTg1Y2ZkZWQ4ZGU0NzA=';
  // }

  return config;
};

export const handleNetworkError = (errStatus?: number): void => {
  const networkErrMap: any = {
    '400': '错误的请求', // token 失效
    '401': '未授权，请重新登录',
    '403': '拒绝访问',
    '404': '请求错误，未找到该资源',
    '405': '请求方法未允许',
    '408': '请求超时',
    '500': '服务器端出错',
    '501': '网络未实现',
    '502': '网络错误',
    '503': '服务不可用',
    '504': '网络超时',
    '505': 'http版本不支持该请求'
  };
  if (errStatus) {
    message.error(networkErrMap[errStatus] ?? `其他连接错误 --${errStatus}`);
    return;
  }

  message.error('无法连接到服务器！');
};

export const handleAuthError = (code: number): boolean => {
  const authErrMap: any = {
    '401': '登录失效，需要重新登录' // token 失效
  };

  if (authErrMap.hasOwnProperty(code)) {
    message.error(authErrMap[code]);
    // 授权错误，登出账户
    // logout();
    return false;
  }

  return true;
};

export const handleGeneralError = (code: number, msg: string): boolean => {
  if (code && code !== 0) {
    return false;
  }
  alert(msg);
  return true;
};

export type CodeError = {
  code: number;
  message: string;
};
