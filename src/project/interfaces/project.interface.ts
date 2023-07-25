import { Document } from 'mongoose';

export interface Project extends Document {
  readonly title: string;
  readonly github_url: string;
  created_at: Date;
  updated_at: Date;
  documents: Array<any>;
}
