import { bootstrap } from './server';

async function main() {
  const app = await bootstrap();

  await app.listen(3000);
}

main();
