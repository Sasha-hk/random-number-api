import {
  Handler,
  // APIGatewayProxyEvent,
  APIGatewayProxyResultV2,
} from 'aws-lambda';

export const handler: Handler = async (): // _: APIGatewayProxyEvent,
Promise<APIGatewayProxyResultV2> => {
  return {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda! 123123'),
  };
};
