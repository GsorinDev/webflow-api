import * as mongoose from 'mongoose';

function mongodbLink() {
  if(process.env.MONGO) {
    return process.env.MONGO
  } else {
    return 'mongodb://localhost/nest'
  }
}

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(mongodbLink()),
  },
];
