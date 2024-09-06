'use server';

import { posts } from '@/server/schema';
import { db } from '../server';
import { revalidatePath } from 'next/cache';

export default async function createPost(formData: FormData) {
  const title = formData.get('title')?.toString();

  if (!title) {
    return { error: 'title is required' };
  }
  const post = await db.insert(posts).values({
    title: title?.toString(),
  });

  revalidatePath('/');

  //   return { success: post };
}
