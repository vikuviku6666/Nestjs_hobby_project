import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ExampleMiddleware } from './middlewares/example/example.middleware';
import { AnotherMiddleware } from './middlewares/another/another.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ExampleMiddleware)
      .forRoutes(
        {
          path: 'users/role',
          method: RequestMethod.GET,
        },
        {
          path: 'users/:id',
          method: RequestMethod.GET,
        },
      )
      .apply(AnotherMiddleware)
      .forRoutes(
        {
          path: 'users/role',
          method: RequestMethod.GET,
        },
        {
          path: 'users/:id',
          method: RequestMethod.GET,
        },
      );
  }
}
