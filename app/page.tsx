import getPosts from '@/actions/get-posts';
import { GetPostsResponse } from '@/types';

export default async function Home() {
  const { error, success }: GetPostsResponse = await getPosts();

  if (error) {
    throw new Error(error);
  }

  if (success) {
    return (
      <main>
        {success &&
          success.map((post: { id: number; title: string }) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
            </div>
          ))}
      </main>
    );
  }
}
