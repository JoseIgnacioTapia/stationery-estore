import getPosts from '@/actions/get-posts';
// import createPost from '@/actions/create-posts';
import { GetPostsResponse } from '@/types';
import Form from '@/components/Form';

export default async function Home() {
  const { error, success }: GetPostsResponse = await getPosts();
  console.log(success);

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
        <Form />
      </main>
    );
  }
}
