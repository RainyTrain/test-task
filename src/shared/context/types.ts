import { User } from '@entities';
import { Post } from '@entities';

export interface UserBehaviour {
  users: User[];
  posts: Post[];
  changePostData: (id: number, post: Post) => void;
  removeUserData: (arg: number) => void;
  removeUserPost: (arg: number) => void;
  selectedId: number | null;
  showPostsByUserId: (id: number) => void;
}
