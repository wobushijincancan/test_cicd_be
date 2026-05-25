import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      code: 0,
      message: 'success',
      data: 'Hello World!'
    };
  }
}
