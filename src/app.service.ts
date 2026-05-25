import { Injectable } from '@nestjs/common';

interface ResponseDto {
  code: number;
  message: string;
  data: string;
}

@Injectable()
export class AppService {
  getHello(): ResponseDto {
    return {
      code: 0,
      message: 'success',
      data: 'Hello World!'
    };
  }
}
