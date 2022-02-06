import { Config, ConfigKeys } from './types';
import { injectable } from 'inversify';

export const configToken = Symbol.for('ConfigToken');

@injectable()
export class ConfigService implements Config {
  private readonly nodeEnv: typeof process.env.NODE_ENV;
  private readonly config: ConfigKeys;

  constructor(config: ConfigKeys) {
    this.config = config;
    this.nodeEnv = process.env.NODE_ENV;
  }

  private getKeyOrDie(
    env: Record<string, string> | NodeJS.ProcessEnv,
    key: string,
    envName: string,
    fallback = '',
  ) {
    const result = env[key];

    if (!result) {
      if (this.isDev) {
        console.log(`Cant find in ${envName} key: ${key}, using fallback value ${fallback}`);
      }
      return fallback;
    }
    return result;
  }

  private get publicRuntime() {
    return this.config.publicRuntimeConfig;
  }

  private get serverRuntime() {
    return this.config.serverRuntimeConfig;
  }

  public getServerOrDie(key: string, fallback = ''): string {
    return this.getKeyOrDie(this.serverRuntime, key, fallback, 'serverRuntime');
  }

  public getPublicOrDie(key: string, fallback = ''): string {
    return this.getKeyOrDie(this.publicRuntime, key, fallback, 'publicRuntime');
  }

  public getStaticOrDie(key: string, fallback = ''): string {
    return this.getKeyOrDie(process.env, key, 'process.env', fallback);
  }

  get isServer() {
    return typeof window === 'undefined';
  }

  get isProd() {
    return this.nodeEnv === 'production';
  }

  get isDev() {
    return this.nodeEnv !== 'production';
  }

  get isTest() {
    return this.nodeEnv === 'test';
  }
}
