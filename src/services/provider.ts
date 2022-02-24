import { IExhibitionStore } from '@pages/exhibitions/[id]/store';
import {
  ExhibitionStore,
  exhibitionStoreToken,
} from '@pages/exhibitions/[id]/store/ExhibitionStore';
import {
  ExhibitionsStore,
  exhibitionsStoreToken,
  IExhibitionsStore,
} from '@pages/exhibitions/store';

import { Config, ConfigService, configToken } from './ConfigService';
import { Http, HttpService, httpServiceToken } from './HttpService';
import { Container } from 'inversify';
import getConfig from 'next/config';

export const createContainer = () => {
  const container = new Container();

  container.bind<Config>(configToken).toConstantValue(new ConfigService(getConfig()));
  container.bind<Http>(httpServiceToken).to(HttpService).inSingletonScope();
  container.bind<IExhibitionsStore>(exhibitionsStoreToken).to(ExhibitionsStore).inSingletonScope();
  container.bind<IExhibitionStore>(exhibitionStoreToken).to(ExhibitionStore).inSingletonScope();

  return container;
};
