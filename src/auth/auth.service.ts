import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(loginDto: LoginDto): Promise<any> {
    const userExist = await this.usersService.findOne(loginDto.email);

    if (userExist === null) {
      throw new NotFoundException('User not exist');
    }
    if (!(await argon2.verify(userExist.password, loginDto?.password))) {
      throw new UnauthorizedException();
    }

    const payload = { _id: userExist._id, email: userExist.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(registerDto: RegisterDto): Promise<any> {
    const userExist = await this.usersService.findOne(registerDto.email);

    if (registerDto?.password !== registerDto?.confirmPassword) {
      throw new UnauthorizedException();
    }

    if (userExist !== null) {
      throw new NotFoundException('User already exist');
    }

    return this.usersService.create(registerDto);
  }
}
