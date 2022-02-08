import { ExhibitionsStore, exhibitionStoreToken, IExhibitionStore } from '@pages/exhibitions/store';

import { Config, ConfigService, configToken } from './ConfigService';
import { Http, HttpService, httpServiceToken } from './HttpService';
import { Container } from 'inversify';
import getConfig from 'next/config';

export const createContainer = () => {
  const container = new Container();

  container.bind<Config>(configToken).toConstantValue(new ConfigService(getConfig()));
  container.bind<Http>(httpServiceToken).to(HttpService).inSingletonScope();
  container.bind<IExhibitionStore>(exhibitionStoreToken).to(ExhibitionsStore).inSingletonScope();

  return container;
};
