'use client';
import { signOut, useSession } from 'next-auth/react';

export default function ProfilePage() {
  const session = useSession();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p>{session.data?.user?.name}</p>
      <p>{session.data?.user?.email}</p>
      <button className="border p-2 my-4" onClick={() => signOut()}>
        sign out
      </button>
    </div>
  );
}
