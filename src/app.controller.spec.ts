import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return the expected response object', () => {
      // 期望返回的是一个对象，包含 code, message 和 data
      expect(appController.getHello()).toEqual({
        code: 0,
        message: 'success',
        data: 'Hello World!!!',
      });
    });
  });
});
