import { Inject, Injectable } from '@nestjs/common';
import { Model, PipelineStage } from 'mongoose';
import { Project } from '../project/interfaces/project.interface';
import { CreateTicketDto } from "../ticket/dto/create-ticket.dto";
import { Ticket } from "../ticket/interfaces/ticket.interface";
import { EventTicket } from "../class/Event";
import { CreateProjectDto } from "./dto/create-project.dto";

@Injectable()
export class ProjectService {
  constructor(
    @Inject('PROJECT_MODEL')
    private projectModel: Model<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const createProject = new this.projectModel(createProjectDto);

    createProject.created_at = new Date();
    createProject.updated_at = new Date();
    createProject.documents = new Array<any>();
    return createProject.save();
  }
}
