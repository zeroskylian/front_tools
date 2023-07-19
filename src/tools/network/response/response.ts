export interface FcResponse<T> {
  msg: string;
  code: number;
  data: T;
}

export type TupleResponse<T> = Promise<[any, T | undefined]>;

export type RawResponse<T> = Promise<T>;

export type ApiResponse<T> = Promise<T | undefined>;
