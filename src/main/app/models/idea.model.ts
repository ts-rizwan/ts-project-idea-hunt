import { User } from './user.model';

export class Idea {
  id: string = '';
  title: string = '';
  description: string = '';
  status: string = '';
  upvotes: number = 0;
  downvotes: number = 0;
  sessionTime: string = '';
  trainer: User | null = null;
  sessionLink: string = '';
  postedAt: string = '';
  postedBy: string = '';
}
