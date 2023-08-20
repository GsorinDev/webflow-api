import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { DatabaseModule } from '../database/database.module';
import { ticketsProviders } from './ticket.providers';
import { projectProviders } from '../project/project.providers';
import { groupUsersProviders } from '../group-users/group-users.providers';
import { GroupUsersService } from '../group-users/group-users.service';
import { userProviders } from '../users/user.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    TicketService,
    ...ticketsProviders,
    ...projectProviders,
    ...groupUsersProviders,
    ...userProviders,
    GroupUsersService,
  ],
  controllers: [TicketController],
})
export class TicketModule {}
