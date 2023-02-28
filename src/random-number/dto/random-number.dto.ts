import { IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class GetRandomNumberDto {
  @ApiProperty({
    type: 'number',
    description: 'Minimum number to generate',
    required: false,
    default: 0,
  })
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  readonly min?: number;

  @ApiProperty({
    type: 'number',
    description: 'Maximum number to generate',
    required: false,
    default: 100,
  })
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  readonly max?: number;
}
