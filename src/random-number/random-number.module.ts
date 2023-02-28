import { Module } from '@nestjs/common';

import { RandomNumberController } from './random-number.controller';
import { RandomNumberService } from './random-number.service';

@Module({
  providers: [RandomNumberService],
  controllers: [RandomNumberController],
  imports: [],
  exports: [RandomNumberService],
})
export class RandomNumberModule {}
