import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}
export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsEnum(Priority)
  @IsNotEmpty()
  readonly priority: Priority;

  @IsString()
  @IsNotEmpty()
  readonly project_id: string;
}
