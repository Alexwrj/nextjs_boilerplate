/* eslint-disable camelcase */
import { Exhibition } from '@pages/exhibitions/store/types';

import moment from 'moment';

const PLACEHOLDER_IMAGE = '/img/placeholder-image.png';
const FORMAT = 'DD.MM.YYYY';

export class ExhibitionView {
  public id: number;
  public title: string;
  public date: string;
  public description: string;
  public imageUrl?: string;

  constructor({ id, title, image_url, aic_start_at, aic_end_at, description }: Exhibition) {
    this.id = id;
    this.title = title;
    this.imageUrl = image_url || PLACEHOLDER_IMAGE;
    this.date = `${moment(aic_start_at).format(FORMAT)} — ${moment(aic_end_at).format(FORMAT)}`;
    this.description = description;
  }
}
