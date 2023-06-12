'use client';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="border-2 p-4 flex items-center justify-between sticky top-0 z-10 bg-white">
      <Link href="/motes">Motes</Link>
      <div>
        <Link href="/motes/add" className="border p-2 mr-4">
          add
        </Link>
        <Link href="/motes/profile" className="border p-2">
          profile
        </Link>
      </div>
    </nav>
  );
}
