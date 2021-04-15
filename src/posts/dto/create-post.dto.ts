export class CreatePostDto {
  readonly title: string;
  readonly content: string;
  readonly published: boolean;
  readonly authorId: number;
}
