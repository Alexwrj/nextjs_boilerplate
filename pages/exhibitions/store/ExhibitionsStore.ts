import { ExhibitionView } from '@pages/exhibitions/store/ExhibitionView';

import 'reflect-metadata';
import { Exhibition, ExhibitionsResponse, IExhibitionsStore } from './types';
import { Http, httpServiceToken } from '@services/HttpService';
import { Response } from '@services/HttpService/types';
import { inject, injectable } from 'inversify';
import { makeAutoObservable, runInAction } from 'mobx';

export const exhibitionsStoreToken = Symbol.for('ExhibitionsStoreToken');

const LIMIT = 20;

@injectable()
export class ExhibitionsStore implements IExhibitionsStore {
  private nextPage: string;

  public isLoading = false;
  public hasError = false;
  public exhibitions: Exhibition[] = [];

  constructor(@inject(httpServiceToken) private readonly httpService: Http) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.nextPage = `https://api.artic.edu/api/v1/exhibitions?limit=${LIMIT}`;
  }

  // TODO: create a separate Repository store, encapsulate its logic and make it injectable
  private fetchExhibitions(): Promise<Response<unknown, ExhibitionsResponse>> {
    return this.httpService.get(this.nextPage);
  }

  public async loadExhibitions(): Promise<void> {
    this.isLoading = true;
    this.hasError = false;

    const response = await this.fetchExhibitions();

    runInAction(() => {
      response.mapRight(({ data: { data: exhibitions, pagination } }) => {
        this.exhibitions = [...this.exhibitions, ...exhibitions];
        this.nextPage = pagination.next_url;
      });

      response.mapLeft(() => {
        this.hasError = true;
      });

      this.isLoading = false;
    });
  }

  public setInitialNextPage(nextPage: string): void {
    this.nextPage = nextPage;
  }

  public setInitialExhibitions(exhibitions: Exhibition[]): void {
    this.exhibitions = exhibitions;
  }

  public getInitialNextPage(): string {
    return this.nextPage;
  }

  public buildView(exhibitionData: Exhibition): ExhibitionView {
    return new ExhibitionView(exhibitionData);
  }

  get hasNextPage(): boolean {
    return Boolean(this.nextPage);
  }
}
