import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('USER_MICROSERVICE') private client: ClientProxy
    ) {}

  @Get()
  getHello() {
    return this.client.send({cmd: 'cmd'}, 'hello');
  }
}
