import { IsString, IsNotEmpty } from 'class-validator';
export class CreateGroupUsersDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;
}
