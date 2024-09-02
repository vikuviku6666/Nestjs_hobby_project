import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ItemsController } from './items/items.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, ItemsController],
  providers: [AppService],
})
export class AppModule {}
