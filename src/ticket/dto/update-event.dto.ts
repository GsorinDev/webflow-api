import { IsNotEmpty, IsEnum } from 'class-validator';

enum typeEvent {
  PROD = 'production',
  BEING = 'being',
  BLOCKED = 'blocked',
  FINISH = 'finish',
  BACKLOG = 'backlog',
}
export class UpdateEventDto {
  @IsEnum(typeEvent)
  @IsNotEmpty()
  readonly type: typeEvent;
}
