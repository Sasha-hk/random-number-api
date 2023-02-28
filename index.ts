import {
  Handler,
  APIGatewayProxyEvent,
  APIGatewayProxyResultV2,
  Callback,
  Context,
} from 'aws-lambda';
import { bootstrap } from './src/server';

let server: any;

export const handler: Handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback,
): Promise<APIGatewayProxyResultV2> => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
