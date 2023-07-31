import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { RegisterDto } from '../auth/dto/register.dto';
import * as argon2 from 'argon2';
@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}
  async findOne(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email: email });
  }

  async create(registerDto: RegisterDto): Promise<User> {
    const user = new this.userModel(registerDto);

    user.password = await argon2.hash(user.password);
    return user.save();
  }

  async getAll(): Promise<Array<User>> {
    return this.userModel.find({}, { _id: 1, email: 1 });
  }
}
