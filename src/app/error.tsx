'use client';

import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link href="/en">
        <a>Go back home</a>
      </Link>
    </div>
  );
}
