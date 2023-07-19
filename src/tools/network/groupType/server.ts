import instance, { IAnyObj, FcResponse, Fn } from './base/manager';
import { CodeError } from './base/tools';

export const Get = <T>(
  url: string,
  params: IAnyObj = {},
  headers?: any,
  clearFn?: Fn,
): Promise<[any, T | undefined]> =>
  new Promise(resolve => {
    instance
      .get(url, { params, headers })
      .then(result => {
        let res: FcResponse<T>;
        if (clearFn !== undefined) {
          res = clearFn(result.data) as unknown as FcResponse<T>;
        } else {
          res = result.data as FcResponse<T>;
        }
        if (res.code === 0) {
          resolve([null, res.data]);
        } else {
          const err: CodeError = { code: res.code, message: res.msg };
          resolve([err, undefined]);
        }
      })
      .catch(err => {
        resolve([err, undefined]);
      });
  });

export const Post = <T>(
  url: string,
  data: IAnyObj,
  headers?: any,
  params: IAnyObj = {},
  clearFn?: Fn,
): Promise<[any, T | undefined]> => {
  return new Promise(resolve => {
    instance
      .post(url, data, { params, headers })
      .then(result => {
        let res: FcResponse<T>;
        if (clearFn !== undefined) {
          res = clearFn(result.data) as unknown as FcResponse<T>;
        } else {
          res = result.data as FcResponse<T>;
        }
        if (res.code === 0) {
          resolve([null, res.data]);
        } else {
          const err: CodeError = { code: res.code, message: res.msg };
          resolve([err, undefined]);
        }
      })
      .catch(err => {
        resolve([err, undefined]);
      });
  });
};
