import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { DatabaseModule } from '../database/database.module';
import { ticketsProviders } from './ticket.providers';

@Module({
  imports: [DatabaseModule],
  providers: [TicketService, ...ticketsProviders],
  controllers: [TicketController],
})
export class TicketModule {}
