import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public testRoute() {
    return 'Hello from test route';
  }
}
