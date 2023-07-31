import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { GroupUsers } from './interfaces/group-users.interface';
import { CreateGroupUsersDto } from './dto/create-group-users.dto';
import { AddUserGroupUsersDto } from './dto/add-user-group-users.dto';
import { User } from '../users/interfaces/user.interface';
import { Project } from '../project/interfaces/project.interface';

enum Role {
  ADMIN = 'admin',
  MEMBER = 'member',
  VIEWER = 'viewer',
}

@Injectable()
export class GroupUsersService {
  constructor(
    @Inject('GROUP_USERS_MODEL')
    private groupUsersModel: Model<GroupUsers>,
    @Inject('USER_MODEL')
    private userModel: Model<User>,
    @Inject('PROJECT_MODEL')
    private projectModel: Model<Project>,
  ) {}

  async create(createGroupeUsersDto: CreateGroupUsersDto, user: any) {
    const groupUsers = new this.groupUsersModel(createGroupeUsersDto);

    groupUsers.users.push({
      user_id: user._id,
      role: Role.ADMIN,
    });

    const projectExist = await this.projectModel
      .findById(createGroupeUsersDto.project_id)
      .exec();

    if (projectExist === null) {
      throw new NotFoundException('Project not found');
    }

    return groupUsers.save();
  }

  async addUser(addUserGroupUsersDto: AddUserGroupUsersDto, id: string) {
    const userExist = await this.userModel
      .findById(addUserGroupUsersDto.user_id)
      .exec();

    if (userExist === null) {
      throw new NotFoundException('User not found');
    }

    const groupUser = await this.groupUsersModel.findById({ _id: id });
    const isUserExists = groupUser.users.some(
      (user) => user.user_id === addUserGroupUsersDto.user_id,
    );

    if (!isUserExists) {
      await this.groupUsersModel.findByIdAndUpdate(
        { _id: id },
        { $addToSet: { users: addUserGroupUsersDto } },
        { new: true },
      );
    }
  }
}
