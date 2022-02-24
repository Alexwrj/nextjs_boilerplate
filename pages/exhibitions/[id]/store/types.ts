import { Exhibition } from '@pages/exhibitions/store/types';

export interface IExhibitionStore {
  isLoading: boolean;
  hasError: boolean;
  exhibition: Exhibition | null;
  loadExhibition(id: number | string): Promise<void>;
}

export interface ExhibitionResponse {
  readonly data: Exhibition;
}
