enum typeEvent {
  PROD = 'production',
  BEING = 'being',
  BLOCKED = 'blocked',
  FINISH = 'finish',
  BACKLOG = 'backlog',
}

export class EventTicket {
  public date: Date;
  public type: typeEvent;
}
