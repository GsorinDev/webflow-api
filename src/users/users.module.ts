import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './user.providers';

@Module({
  providers: [UsersService, ...userProviders],
  exports: [UsersService],
  imports: [DatabaseModule],
})
export class UsersModule {}
