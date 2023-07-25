import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { DatabaseModule } from '../database/database.module';
import { ticketsProviders } from './ticket.providers';
import { projectProviders } from '../project/project.providers';

@Module({
  imports: [DatabaseModule],
  providers: [TicketService, ...ticketsProviders, ...projectProviders],
  controllers: [TicketController],
})
export class TicketModule {}
