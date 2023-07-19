import instance, { IAnyObj } from './base/manager';
import { RawResponse } from './response/response';

export const Get = <T>(
  url: string,
  params: IAnyObj = {},
  headers?: any,
): RawResponse<T> =>
  new Promise((resolve, reject) => {
    instance
      .get(url, { params, headers })
      .then(result => {
        resolve(result.data);
      })
      .catch(err => {
        reject(err);
      });
  });

export const Post = <T>(
  url: string,
  data: IAnyObj,
  headers?: any,
  params: IAnyObj = {},
): RawResponse<T> => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, { params, headers })
      .then(result => {
        resolve(result.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const RawRequest = { Get, Post };
export default RawRequest;
