import { IsString, IsNotEmpty } from 'class-validator';
export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly github_url: string;
}
