import { Exhibition } from '@pages/exhibitions/store/types';

import { ExhibitionResponse, IExhibitionStore } from './types';
import { Http, httpServiceToken } from '@services/HttpService';
import { Response } from '@services/HttpService/types';
import { inject, injectable } from 'inversify';
import { makeAutoObservable, runInAction } from 'mobx';

export const exhibitionStoreToken = Symbol.for('ExhibitionStoreToken');

@injectable()
export class ExhibitionStore implements IExhibitionStore {
  public isLoading = false;
  public hasError = false;
  public exhibition: Exhibition | null = null;

  constructor(@inject(httpServiceToken) private readonly httpService: Http) {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private fetchExhibitions(id: number | string): Promise<Response<unknown, ExhibitionResponse>> {
    return this.httpService.get(`https://api.artic.edu/api/v1/exhibitions/${id}`);
  }

  public async loadExhibition(id: number | string): Promise<void> {
    this.isLoading = false;
    this.hasError = false;

    const response = await this.fetchExhibitions(id);

    runInAction(() => {
      response.mapRight(({ data: { data: exhibition } }) => {
        this.exhibition = exhibition;
      });

      response.mapLeft(() => {
        this.hasError = true;
      });

      this.isLoading = false;
    });
  }
}
