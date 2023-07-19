import instance, { FcResponse, IAnyObj } from './base/manager';

export const GetRaw = <T>(
  url: string,
  params: IAnyObj = {},
  headers?: any
): Promise<T> =>
  new Promise((resolve) => {
    instance
      .get(url, { params, headers })
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        resolve(err);
      });
  });

export const PostRaw = <T>(
  url: string,
  data: IAnyObj,
  headers?: any,
  params: IAnyObj = {}
): Promise<T> => {
  return new Promise((resolve) => {
    instance
      .post(url, data, { params, headers })
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        resolve(err);
      });
  });
};
