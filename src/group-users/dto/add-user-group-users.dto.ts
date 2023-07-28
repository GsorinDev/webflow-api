import { IsNotEmpty, IsObject, IsEnum, IsString } from "class-validator";
import { User } from '../../users/interfaces/user.interface';

enum Role {
  ADMIN = 'admin',
  MEMBER = 'member',
  VIEWER = 'viewer',
}
export class AddUserGroupUsersDto {
  @IsObject()
  @IsNotEmpty()
  readonly _id: string;

  @IsEnum(Role)
  @IsNotEmpty()
  readonly role: Role;
}
