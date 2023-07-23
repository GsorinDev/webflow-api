import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}
export class UpdateTicketDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsEnum(Priority)
  @IsNotEmpty()
  readonly priority: Priority;
}
