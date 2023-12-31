import { Document } from 'mongoose';
import { EventTicket } from '../../class/Event';

export enum TicketPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export interface Ticket extends Document {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  created_at: Date;
  updated_at: Date;
  readonly priority: TicketPriority;
  events: Array<EventTicket>;
  project_id: string;
  creator: {
    id: string;
    email: string;
  };
}
