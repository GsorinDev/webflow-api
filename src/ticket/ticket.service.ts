import mongoose, { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Ticket } from './interfaces/ticket.interface';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { EventTicket } from '../class/Event';
import { UpdateEventDto } from './dto/update-event.dto';
import { Project } from '../project/interfaces/project.interface';
@Injectable()
export class TicketService {
  constructor(
    @Inject('TICKET_MODEL')
    private ticketModel: Model<Ticket>,
    @Inject('PROJECT_MODEL')
    private projectModel: Model<Project>,
  ) {}

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const createdTicket = new this.ticketModel(createTicketDto);

    const projectExist = await this.projectModel
      .findById(createTicketDto.project_id)
      .exec();

    if (projectExist === null) {
      throw new NotFoundException('Project not found');
    }

    createdTicket.created_at = new Date();
    createdTicket.updated_at = new Date();
    createdTicket.events = new Array<EventTicket>();
    return createdTicket.save();
  }

  async update(id: string, updateTicketDto: UpdateTicketDto): Promise<Ticket> {
    const ticket = await this.ticketModel.findById(id).exec();

    const projectExist = await this.projectModel
      .findById(updateTicketDto.project_id)
      .exec();

    if (projectExist === null) {
      throw new NotFoundException('Project not found');
    }


    if (!ticket) {
      throw new NotFoundException('Ticket not found');
    }
    const updateTicket = { ...updateTicketDto, updated_at: new Date() };
    ticket.set(updateTicket);
    return ticket.save();
  }

  async updateEvent(id: string, updateEventDto: UpdateEventDto) {
    const event = { ...updateEventDto, date: new Date() };
    await this.ticketModel.findByIdAndUpdate(
      id,
      { $push: { events: event } },
      { new: true },
    );
  }

  async findOneById(id: string): Promise<Ticket> {
    return this.ticketModel.findById(id);
  }

  async deleteOneById(id: string) {
    return this.ticketModel.deleteOne({ _id: id });
  }

  async findAll(): Promise<Ticket[]> {
    return this.ticketModel.find().exec();
  }
}
