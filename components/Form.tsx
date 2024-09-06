'use client';

import createPost from '@/actions/create-posts';

function Form() {
  return (
    <form action={createPost}>
      <input type='text' name='title' placeholder='Title' />
      <button type='submit'>Submit</button>
    </form>
  );
}
export default Form;
