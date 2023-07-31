import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { projectProviders } from './project.providers';
import { DatabaseModule } from '../database/database.module';
import { GroupUsersModule } from '../group-users/group-users.module';
import { GroupUsersService } from '../group-users/group-users.service';
import { groupUsersProviders } from '../group-users/group-users.providers';
import { userProviders } from '../users/user.providers';

@Module({
  imports: [DatabaseModule, GroupUsersModule],
  providers: [
    ProjectService,
    ...projectProviders,
    GroupUsersService,
    ...groupUsersProviders,
    ...userProviders,
  ],
  controllers: [ProjectController],
})
export class ProjectModule {}
