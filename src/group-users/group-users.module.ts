import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { GroupUsersService } from './group-users.service';
import { GroupUsersController } from './group-users.controller';
import { groupUsersProviders } from './group-users.providers';
import { userProviders } from '../users/user.providers';

@Module({
  imports: [DatabaseModule],
  providers: [GroupUsersService, ...groupUsersProviders, ...userProviders],
  controllers: [GroupUsersController],
})
export class GroupUsersModule {}
