import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { Ticket } from './interfaces/ticket.interface';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body(new ValidationPipe()) createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateTicketDto: UpdateTicketDto,
  ) {
    return this.ticketService.update(id, updateTicketDto);
  }

  @UseGuards(AuthGuard)
  @Put('event/:id')
  async eventUpdate(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateEventDto: UpdateEventDto,
  ) {
    return this.ticketService.updateEvent(id, updateEventDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<Ticket[]> {
    return this.ticketService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async finOneById(@Param('id') id: string): Promise<Ticket> {
    return this.ticketService.findOneById(id);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteOneById(@Param('id') id: string) {
    return this.ticketService.deleteOneById(id);
  }
}
