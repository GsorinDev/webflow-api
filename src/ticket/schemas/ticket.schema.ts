import * as mongoose from 'mongoose';
import { EventTicket } from '../../class/Event';

enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}
export const TicketSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  created_at: Date,
  updated_at: Date,
  priority: {
    type: String,
    enum: Priority,
  },
  events: {
    type: Array<EventTicket>,
  },
  project_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PROJECT_MODEL',
  },
  creator: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'USER_MODEL',
    },
    email: String,
  },
});
