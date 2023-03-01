import { Callback, Context, Handler } from 'aws-lambda';

import { bootstrap } from './server';
import serverlessExpress from '@vendia/serverless-express';

let server: Handler;

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  if (!server) {
    const app = await bootstrap();
    await app.init();
    const expressApp = app.getHttpAdapter().getInstance();
    server = serverlessExpress({ app: expressApp });
  }

  return server(event, context, callback);
};
