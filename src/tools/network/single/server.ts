import instance, { IAnyObj, FcResponse, Fn } from './base/manager';
import { CodeError } from './base/tools';

export const Get = <T>(
  url: string,
  params: IAnyObj = {},
  headers?: any,
  clearFn?: Fn
): Promise<T | undefined> =>
  new Promise((resolve, reject) => {
    instance
      .get(url, { params, headers })
      .then((result) => {
        let res: FcResponse<T>;
        if (clearFn !== undefined) {
          res = clearFn(result.data) as unknown as FcResponse<T>;
        } else {
          res = result.data as FcResponse<T>;
        }
        if (res.code === 0) {
          resolve(res.data);
        } else {
          const err: CodeError = { code: res.code, message: res.msg };
          reject(err);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });

export const Post = <T>(
  url: string,
  data: IAnyObj,
  headers?: any,
  params: IAnyObj = {},
  clearFn?: Fn
): Promise<T | undefined> => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, { params, headers })
      .then((result) => {
        let res: FcResponse<T>;
        if (clearFn !== undefined) {
          res = clearFn(result.data) as unknown as FcResponse<T>;
        } else {
          res = result.data as FcResponse<T>;
        }
        if (res.code === 0) {
          resolve(res.data);
        } else {
          const err: CodeError = { code: res.code, message: res.msg };
          reject(err);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};
