import { Connection } from 'mongoose';
import { GroupUsersSchema } from './schemas/group-users.schema';

export const groupUsersProviders = [
  {
    provide: 'GROUP_USERS_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Group_users', GroupUsersSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
