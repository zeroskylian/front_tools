import instance, { IAnyObj, FcResponse, Fn } from './base/manager';
import { CodeError } from './base/tools';
import { TupleResponse } from './response/response';

export const Get = <T>(
  url: string,
  params: IAnyObj = {},
  headers?: any,
  clearFn?: Fn,
): TupleResponse<T> =>
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
): TupleResponse<T> => {
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

const TupleRequest = { Get, Post };

export default TupleRequest;
