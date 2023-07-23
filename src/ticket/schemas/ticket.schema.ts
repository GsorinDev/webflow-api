import * as mongoose from 'mongoose';
import { EventTicket } from '../../class/Event';
enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}
export const TicketSchema = new mongoose.Schema({
  title: String,
  description: String,
  created_at: Date,
  updated_at: Date,
  priority: {
    type: String,
    enum: Object.values(Priority),
  },
  events: {
    type: Array<EventTicket>,
  },
});
