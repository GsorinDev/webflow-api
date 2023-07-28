import { Document } from 'mongoose';
import { User } from '../../users/interfaces/user.interface';

enum Role {
  ADMIN = 'admin',
  MEMBER = 'member',
  VIEWER = 'viewer',
}
export interface GroupUsers extends Document {
  readonly title: string;
  readonly description: string;
  created_at: Date;
  updated_at: Date;
  users: Array<{ user: User; role: Role }>;
}
