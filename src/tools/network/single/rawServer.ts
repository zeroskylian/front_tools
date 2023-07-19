import instance, { IAnyObj } from './base/manager';

export const GetRaw = <T>(
  url: string,
  params: IAnyObj = {},
  headers?: any
): Promise<T> =>
  new Promise((resolve, reject) => {
    instance
      .get(url, { params, headers })
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const PostRaw = <T>(
  url: string,
  data: IAnyObj,
  headers?: any,
  params: IAnyObj = {}
): Promise<T> => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, { params, headers })
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
