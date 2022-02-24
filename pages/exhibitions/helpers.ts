import { ExhibitionView } from '@pages/exhibitions/store/ExhibitionView';
import { Exhibition } from '@pages/exhibitions/store/types';

export const buildExhibitionView = (exhibitionData: Exhibition): ExhibitionView => {
  return new ExhibitionView(exhibitionData);
};
