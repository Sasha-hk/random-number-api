import { Module } from '@nestjs/common';

import { RandomNumberModule } from './random-number/random-number.module';

@Module({
  controllers: [],
  providers: [],
  imports: [RandomNumberModule],
  exports: [],
})
export class AppModule {}
