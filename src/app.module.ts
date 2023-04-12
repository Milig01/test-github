import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    UserModule,
        ClientsModule.register([
          {
            name: 'USER_MICROSERVICE',
            transport: Transport.RMQ,
            options: {
              urls: ['amqp://localhost'],
              queue: 'user_queue',
              queueOptions: {
                durable: false
              }
            }
          }
        ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
