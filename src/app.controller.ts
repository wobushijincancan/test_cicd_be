import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface ResponseDto {
  code: number;
  message: string;
  data: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): ResponseDto {
    return this.appService.getHello();
  }
}
