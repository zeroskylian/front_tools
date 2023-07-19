import { Post, Get } from '../server';
import { PostRaw, GetRaw } from '../rawServer';

export function testGet<T = any>(key: string): Promise<T | undefined> {
  return Get<T>('/get', { configKey: key });
}
export function testGetRaw<T = any>(key: string): Promise<T | undefined> {
  return GetRaw<T>('/get', { configKey: key });
}

export function testPost<T = any>(key: string): Promise<T | undefined> {
  return Post<T>('/post', { configKey: key });
}
export function testPostRaw<T = any>(key: string): Promise<T | undefined> {
  return PostRaw<T>('/post', { configKey: key });
}

export const testApi = {
  testGet,
  testGetRaw,
  testPost,
  testPostRaw
};
