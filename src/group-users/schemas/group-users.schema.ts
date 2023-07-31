import * as mongoose from 'mongoose';
import { User } from '../../users/interfaces/user.interface';

enum Role {
  ADMIN = 'admin',
  MEMBER = 'member',
  VIEWER = 'viewer',
}
export const GroupUsersSchema = new mongoose.Schema({
  created_at: Date,
  updated_at: Date,
  project_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PROJECT_MODEL',
  },
  users: Array<{
    user_id: {
      type: mongoose.Schema.Types.ObjectId;
      ref: 'USER_MODEL';
    };
    role: Role;
  }>,
});
