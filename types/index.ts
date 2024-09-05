import { InferSelectModel } from 'drizzle-orm';
import { posts } from '@/server/schema';

export type Post = InferSelectModel<typeof posts>;

export type GetPostsResponse =
  | { error: string; success?: never }
  | { success: Post[]; error?: never };
