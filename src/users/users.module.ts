import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './user.providers';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService, ...userProviders],
  exports: [UsersService],
  imports: [DatabaseModule],
  controllers: [UsersController],
})
export class UsersModule {}
