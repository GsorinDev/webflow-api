import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketModule } from './ticket/ticket.module';
import { DatabaseModule } from './database/database.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [TicketModule, DatabaseModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
