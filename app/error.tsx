'use client';

import { useEffect } from 'react';

function error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='w-full min-w-full min-h-56 text-lg flex items-center justify-center flex-col'>
      <h2>{error.message}</h2>

      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}

export default error;
