import { bootstrap } from './server';

const main = async () => {
  const server = await bootstrap();

  await server.listen(3000);
};

main();
