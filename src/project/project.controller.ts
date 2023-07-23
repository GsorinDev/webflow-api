import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from '../project/dto/create-project.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }
}
