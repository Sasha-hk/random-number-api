import { Test, TestingModule } from '@nestjs/testing';
import { RandomNumberController } from './random-number.controller';
import { RandomNumberService } from './random-number.service';

describe('RandomNumberController', () => {
  let randomNumberController: RandomNumberController;
  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RandomNumberController],
      providers: [RandomNumberService],
    }).compile();

    randomNumberController = app.get<RandomNumberController>(
      RandomNumberController,
    );
  });

  describe('root', () => {
    it('should return ranodm number', async () => {
      const result = randomNumberController.getRandomNumber({});
      expect(typeof result).toBe('number');
      expect(result).toBeLessThanOrEqual(100);
      expect(result).toBeGreaterThanOrEqual(0);
    });

    it('should return number in range from 120 to 130', async () => {
      const min = 120;
      const max = 130;

      for (let i = 0; i < 10; i++) {
        const result = randomNumberController.getRandomNumber({
          min,
          max,
        });

        expect(result).toBeLessThanOrEqual(max);
        expect(result).toBeGreaterThanOrEqual(min);
      }
    });
  });
});
