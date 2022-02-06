import { Config, ConfigService, configToken } from './ConfigService';
import { Http, HttpService, httpServiceToken } from './HttpService';
import { Container } from 'inversify';

export const createContainer = () => {
  const container = new Container();

  container.bind<Config>(configToken).to(ConfigService).inSingletonScope();
  container.bind<Http>(httpServiceToken).to(HttpService).inSingletonScope();

  return container;
};
