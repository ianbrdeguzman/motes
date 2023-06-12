'use client';
import { signIn, useSession } from 'next-auth/react';

export default function LoginClientPage() {
  const session = useSession();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>Sign In Page</h1>
      <button className="border p-2 my-4" onClick={() => signIn('google')}>
        Sign In
      </button>
    </div>
  );
}
