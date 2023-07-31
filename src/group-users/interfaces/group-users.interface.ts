import { Document } from 'mongoose';
enum Role {
  ADMIN = 'admin',
  MEMBER = 'member',
  VIEWER = 'viewer',
}
export interface GroupUsers extends Document {
  created_at: Date;
  updated_at: Date;
  project_id: string;
  users: Array<{ user_id: string; role: Role }>;
}
