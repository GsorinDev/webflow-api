import { IsString, IsNotEmpty } from 'class-validator';
export class CreateGroupUsersDto {
  @IsString()
  @IsNotEmpty()
  project_id: string;
}
