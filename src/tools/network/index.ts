import { testApi } from './path/test';

export const api = { test: { ...testApi } };

export const ossApi = {};

export interface FcResponse<T> {
  msg: string;
  code: number;
  data: T;
}

export type ApiResponse<T> = Promise<T>;
