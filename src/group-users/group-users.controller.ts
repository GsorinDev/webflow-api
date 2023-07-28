import {
  Body,
  Controller, Param,
  Post,
  Request,
  UseGuards,
  ValidationPipe
} from "@nestjs/common";
import { AuthGuard } from '../auth/auth.guard';
import { CreateGroupUsersDto } from './dto/create-group-users.dto';
import { GroupUsersService } from './group-users.service';
import { AddUserGroupUsersDto } from "./dto/add-user-group-users.dto";

@Controller('group-users')
export class GroupUsersController {
  constructor(private readonly groupUsersService: GroupUsersService) {}
  @UseGuards(AuthGuard)
  @Post()
  async create(
    @Body(new ValidationPipe()) createGroupUsersDto: CreateGroupUsersDto,
    @Request() request: any,
  ) {
    return this.groupUsersService.create(createGroupUsersDto, request.user);
  }

  @UseGuards(AuthGuard)
  @Post(':id/adduser')
  async addUser(
    @Body(new ValidationPipe()) addUserGroupUsersDto: AddUserGroupUsersDto,
    @Param('id') id: string,
  ) {
    return this.groupUsersService.addUser(addUserGroupUsersDto, id);
  }
}
