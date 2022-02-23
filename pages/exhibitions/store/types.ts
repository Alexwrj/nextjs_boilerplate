import { ExhibitionView } from '@pages/exhibitions/store/ExhibitionView';

export interface IExhibitionStore {
  isLoading: boolean;
  hasError: boolean;
  exhibitions: Exhibition[];
  hasNextPage: boolean;
  getInitialNextPage(): string;
  loadExhibitions(): Promise<void>;
  setInitialNextPage(nextPage: string): void;
  setInitialExhibitions(exhibitions: Exhibition[]): void;
  buildView(exhibitionData: Exhibition): ExhibitionView;
}

export interface Exhibition {
  readonly id: number;
  readonly title: string;
  readonly aic_start_at: string; //  ISO 860
  readonly aic_end_at: string; //  ISO 860
  readonly image_url?: string;
}

export interface Pagination {
  readonly total: number;
  readonly limit: number;
  readonly offset: number;
  readonly total_pages: number;
  readonly current_page: number;
  readonly next_url: string;
}

export interface ExhibitionResponse {
  readonly data: Exhibition[];
  readonly pagination: Pagination;
}
