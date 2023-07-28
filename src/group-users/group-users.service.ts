import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { GroupUsers } from './interfaces/group-users.interface';
import { CreateGroupUsersDto } from './dto/create-group-users.dto';
import { AddUserGroupUsersDto } from './dto/add-user-group-users.dto';
import { User } from '../users/interfaces/user.interface';

@Injectable()
export class GroupUsersService {
  constructor(
    @Inject('GROUP_USERS_MODEL')
    private groupUsersModel: Model<GroupUsers>,
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async create(createGroupeUsersDto: CreateGroupUsersDto, user: any) {
    const groupUsers = new this.groupUsersModel(createGroupeUsersDto);

    return groupUsers.save();
  }

  async addUser(addUserGroupUsersDto: AddUserGroupUsersDto, id: string) {
    const userExist = await this.userModel
      .findById(addUserGroupUsersDto._id)
      .exec();

    if (userExist === null) {
      throw new NotFoundException('User not found');
    }

    await this.groupUsersModel.findByIdAndUpdate(
      id,
      { $push: { users: addUserGroupUsersDto } },
      { new: true },
    );
  }
}
