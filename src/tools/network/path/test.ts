import Request from '../server';
import RawRequest from '../rawServer';

export function testGet<T = any>(key: string): Promise<T | undefined> {
  return Request.Get<T>('/get', { configKey: key });
}
export function testGetRaw<T = any>(key: string): Promise<T | undefined> {
  return RawRequest.Get<T>('/get', { configKey: key });
}

export function testPost<T = any>(key: string): Promise<T | undefined> {
  return Request.Post<T>('/post', { configKey: key });
}
export function testPostRaw<T = any>(key: string): Promise<T | undefined> {
  return RawRequest.Post<T>('/post', { configKey: key });
}

export const testApi = {
  testGet,
  testGetRaw,
  testPost,
  testPostRaw
};
