import {
  Body,
  Controller,
  Post, Request,
  UseGuards,
  ValidationPipe
} from "@nestjs/common";
import { ProjectService } from './project.service';
import { CreateProjectDto } from '../project/dto/create-project.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(
    @Body(new ValidationPipe()) createProjectDto: CreateProjectDto,
    @Request() request: any,
  ) {
    return this.projectService.create(createProjectDto, request.user);
  }
}
