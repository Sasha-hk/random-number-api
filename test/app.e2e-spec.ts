import { Test, TestingModule } from '@nestjs/testing';
import { ValidationPipe } from '@nestjs/common';
import type { Application } from 'express';
import request from 'supertest';

import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: Application;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const application = await module
      .createNestApplication()
      .useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }))
      .init();

    app = application.getHttpServer();
  });

  it('/ (GET)', async () => {
    return request(app).post('/main');
  });
});
