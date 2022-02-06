import { Either } from '@sweet-monads/either';

export interface SuccessResponse<T> {
  data: T;
}

export interface ErrorResponse<T = unknown> {
  response: {
    data: T;
  } | null;
}

export type Response<T, U> = Either<ErrorResponse<T>, SuccessResponse<U>>;

export interface Http {
  get<T, U>(url: string, params?: Record<string, unknown>): Promise<Response<T, U>>;
  post<T, U>(url: string, data: Record<string, unknown>): Promise<Response<T, U>>;
  patch<T, U>(url: string, data: Record<string, unknown>): Promise<Response<T, U>>;
  delete<T, U>(url: string, data?: Record<string, unknown>): Promise<Response<T, U>>;
}
