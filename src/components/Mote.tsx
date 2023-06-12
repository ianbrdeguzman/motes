'use client';
import Link from 'next/link';

export interface MoteType {
  id: string;
  content: string;
  createdBy: string;
  createdAt: string;
}

interface MoteProps {
  mote: MoteType;
}

export function Mote({ mote }: MoteProps) {
  return (
    <Link href={`/motes/edit/${mote.id}`} className="border p-4">
      {mote.content}
      <p className="mt-4">{new Date(mote.createdAt).toLocaleString()}</p>
    </Link>
  );
}
