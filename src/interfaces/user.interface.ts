export interface UsersModel {
  id?: number;
  email: string;
  name: string;
}
export interface PostsModel {
  id?: number;
  title: string;
  content: string;
  published: boolean;
  authorId?: number;
}
