export enum TypeEvent {
  PROD = 'production',
  BEING = 'being',
  BLOCKED = 'blocked',
  FINISH = 'finish',
  BACKLOG = 'backlog',
}

export class EventTicket {
  public date: Date;
  public type: TypeEvent;

  constructor(type : TypeEvent, date: Date) {
    this.type = type
    this.date = date
  }
}
