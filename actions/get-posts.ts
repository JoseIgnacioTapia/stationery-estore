'use server';

import { db } from '@/server';
import { posts } from '@/server/schema';
import { GetPostsResponse, Post } from '@/types';

export default async function getPosts(): Promise<GetPostsResponse> {
  const posts: Post[] = await db.query.posts.findMany();
  console.log('posts', posts);

  if (!posts || posts.length === 0) {
    return { error: 'No posts found' };
  }

  return { success: posts };
}
