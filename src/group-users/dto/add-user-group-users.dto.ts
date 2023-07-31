import { IsNotEmpty, IsEnum, IsString } from 'class-validator';

enum Role {
  ADMIN = 'admin',
  MEMBER = 'member',
  VIEWER = 'viewer',
}
export class AddUserGroupUsersDto {
  @IsString()
  @IsNotEmpty()
  readonly user_id: string;

  @IsEnum(Role)
  @IsNotEmpty()
  readonly role: Role;
}
