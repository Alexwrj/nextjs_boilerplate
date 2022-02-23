import { Config, configToken } from '../ConfigService';
import { ErrorResponse, Http, Response } from './types';
import { left, right } from '@sweet-monads/either';
import axios, { AxiosError, AxiosInstance } from 'axios';
import { inject, injectable } from 'inversify';

export const httpServiceToken = Symbol.for('HttpServiceToken');

@injectable()
export class HttpService implements Http {
  private readonly instance: AxiosInstance;

  constructor(@inject(configToken) private readonly configService: Config) {
    const clientConfig = {
      withCredentials: false,
      crossdomain: true,
    };

    const serverConfig = {
      headers: {
        Authorization: `Bearer ${configService.getServerOrDie('AUTH_TOKEN')}`,
      },
    };
    this.instance = axios.create(configService.isServer ? serverConfig : clientConfig);
  }

  private errorHandler<E>(error: AxiosError<E>): ErrorResponse<E> {
    const { response } = error as AxiosError<E>;
    const errorData: ErrorResponse<E> = { response: null };
    if (response) {
      errorData.response = response;
    }

    return errorData;
  }

  async get<T, U>(url: string, params?: Record<string, unknown>): Promise<Response<T, U>> {
    try {
      const { data } = await this.instance.get<U>(url, { params });

      return right({ data });
    } catch (error) {
      return left(this.errorHandler(error as AxiosError<T>));
    }
  }

  async post<T, U>(url: string, payload: Record<string, unknown>): Promise<Response<T, U>> {
    try {
      const { data } = await this.instance.post<U>(url, payload);

      return right({ data });
    } catch (error) {
      return left(this.errorHandler(error as AxiosError<T>));
    }
  }

  async patch<T, U>(url: string, payload: Record<string, unknown>): Promise<Response<T, U>> {
    try {
      const { data } = await this.instance.patch<U>(url, payload);

      return right({ data });
    } catch (error) {
      return left(this.errorHandler(error as AxiosError<T>));
    }
  }

  async delete<T, U>(url: string, payload?: Record<string, unknown>): Promise<Response<T, U>> {
    try {
      const { data } = await this.instance.delete<U>(url, payload);

      return right({ data });
    } catch (error) {
      return left(this.errorHandler(error as AxiosError<T>));
    }
  }
}
