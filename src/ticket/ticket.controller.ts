import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { Ticket } from './interfaces/ticket.interface';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateTicketDto: UpdateTicketDto,
  ) {
    return this.ticketService.update(id, updateTicketDto);
  }

  @Put('event/:id')
  async eventUpdate(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateEventDto: UpdateEventDto,
  ) {
    return this.ticketService.updateEvent(id, updateEventDto);
  }

  @Get()
  async findAll(): Promise<Ticket[]> {
    return this.ticketService.findAll();
  }

  @Get(':id')
  async finOneById(@Param('id') id: string): Promise<Ticket> {
    return this.ticketService.findOneById(id);
  }

  @Delete(':id')
  async deleteOneById(@Param('id') id: string) {
    return this.ticketService.deleteOneById(id);
  }
}
