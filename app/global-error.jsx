'use client';

import Error from 'next/error';

export default function GlobalError({ error }) {
  const statusCode = error?.statusCode || 500;

  return (
    <div>
      <Error statusCode={statusCode} />
    </div>
  );
}
