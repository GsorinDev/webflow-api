import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
  title: String,
  github_url: String,
  created_at: Date,
  updated_at: Date,
  documents: Array<any>,
});
