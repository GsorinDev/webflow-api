import * as mongoose from 'mongoose';
import { User } from '../../users/interfaces/user.interface';

enum Role {
  ADMIN = 'admin',
  MEMBER = 'member',
  VIEWER = 'viewer',
}
export const GroupUsersSchema = new mongoose.Schema({
  title: String,
  description: String,
  created_at: Date,
  updated_at: Date,
  users: Array<{ user: User; role: Role }>,
});
