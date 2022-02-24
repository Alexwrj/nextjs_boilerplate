import { Exhibition } from '@pages/exhibitions/store/types';

import { ParsedUrlQuery } from 'querystring';

export interface ExhibitionProps {
  exhibition: Exhibition | null;
}

export interface ExhibitionParams extends ParsedUrlQuery {
  id: string;
}
