import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketModule } from './ticket/ticket.module';
import { DatabaseModule } from './database/database.module';
import { ProjectModule } from './project/project.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GroupUsersController } from './group-users/group-users.controller';
import { GroupUsersService } from './group-users/group-users.service';
import { GroupUsersModule } from './group-users/group-users.module';

@Module({
  imports: [
    TicketModule,
    DatabaseModule,
    ProjectModule,
    AuthModule,
    UsersModule,
    GroupUsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
