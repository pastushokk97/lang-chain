// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace NodeJS {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ProcessEnv {
    NODE_ENV: 'dev' | 'prod' | 'test' | undefined;
    APP_CONTAINER_NAME: string;
    APPLICATION_PORT: string;
  }
}
