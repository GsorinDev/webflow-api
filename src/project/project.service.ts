import { Inject, Injectable } from '@nestjs/common';
import { Model, PipelineStage } from 'mongoose';
import { Project } from '../project/interfaces/project.interface';
import { CreateTicketDto } from '../ticket/dto/create-ticket.dto';
import { Ticket } from '../ticket/interfaces/ticket.interface';
import { EventTicket } from '../class/Event';
import { CreateProjectDto } from './dto/create-project.dto';
import { GroupUsersService } from '../group-users/group-users.service';
import { CreateGroupUsersDto } from '../group-users/dto/create-group-users.dto';

@Injectable()
export class ProjectService {
  constructor(
    @Inject('PROJECT_MODEL')
    private projectModel: Model<Project>,
    private groupUserService: GroupUsersService,
  ) {}

  async create(createProjectDto: CreateProjectDto, user) {
    const createProject = new this.projectModel(createProjectDto);

    createProject.created_at = new Date();
    createProject.updated_at = new Date();
    createProject.documents = new Array<any>();
    const project = await createProject.save();

    const createGroupUsersDto = new CreateGroupUsersDto();
    createGroupUsersDto.project_id = project._id;

    await this.groupUserService.create(createGroupUsersDto, user);
  }
}
