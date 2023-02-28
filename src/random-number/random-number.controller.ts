import { Controller, Get, Query } from '@nestjs/common';
import { RandomNumberService } from './random-number.service';
import { GetRandomNumberDto } from './dto';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('random-number')
@Controller('random-number')
export class RandomNumberController {
  constructor(private readonly randomNumberService: RandomNumberService) {}

  @ApiOperation({ description: 'Generate random number' })
  @ApiBadRequestResponse({ description: 'Bad request queries' })
  @ApiOkResponse({ description: 'Return random number' })
  @Get()
  getRandomNumber(@Query() queries: GetRandomNumberDto) {
    return this.randomNumberService.getRandomNumber(queries.min, queries.max);
  }
}
