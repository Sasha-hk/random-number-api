import { Injectable } from '@nestjs/common';

@Injectable()
export class RandomNumberService {
  getRandomNumber(min: number, max: number) {
    const minValue = min || 0;
    const maxValue = max || 100;

    return Math.round(Math.random() * (maxValue - minValue) + minValue);
  }
}
