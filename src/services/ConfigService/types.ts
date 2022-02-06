export interface Config {
  isServer: boolean;
  isProd: boolean;
  isDev: boolean;
  isTest: boolean;
  getServerOrDie(key: string, fallback?: string): string;
  getPublicOrDie(key: string, fallback?: string): string;
  getStaticOrDie(key: string, fallback?: string): string;
}

export interface ConfigKeys {
  publicRuntimeConfig: Record<string, string>;
  serverRuntimeConfig: Record<string, string>;
}
