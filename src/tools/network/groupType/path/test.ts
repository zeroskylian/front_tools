import { Post, Get } from '../server';
import { PostRaw, GetRaw } from '../rawServer';
import { ApiResponse } from '../index';

export function testGet<T = any>(key: string): ApiResponse<T> {
  return Get<T>('/get', { configKey: key });
}
export function testGetRaw<T = any>(key: string): Promise<T> {
  return GetRaw<T>('/get', { configKey: key });
}

export function testPost<T = any>(key: string): ApiResponse<T> {
  return Post<T>('/post', { configKey: key });
}
export function testPostRaw<T = any>(key: string): Promise<T> {
  return PostRaw<T>('/post', { configKey: key });
}

export const testApi = {
  testGet,
  testGetRaw,
  testPost,
  testPostRaw
};
