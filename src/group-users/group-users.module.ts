import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { GroupUsersService } from './group-users.service';
import { GroupUsersController } from './group-users.controller';
import { groupUsersProviders } from './group-users.providers';
import { userProviders } from '../users/user.providers';
import { projectProviders } from '../project/project.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    GroupUsersService,
    ...groupUsersProviders,
    ...userProviders,
    ...projectProviders,
  ],
  controllers: [GroupUsersController],
})
export class GroupUsersModule {}
