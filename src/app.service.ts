import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHelloVinay(): string {
    return 'Hello World! smart vinay!';
  }
}
