import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { config } from '@/config';
import mysql2 from 'mysql2/promise';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

async function addMote(content: string, createdBy: string) {
  const db = await mysql2.createConnection(config.db.url);

  await db.execute(`INSERT INTO mote (content, created_by) VALUES (?, ?)`, [
    content,
    createdBy
  ]);
}

export default async function AddPage() {
  const session = await getServerSession(authOptions);

  async function action(data: FormData) {
    'use server';
    const content = data.get('content') as string;
    await addMote(content, session?.user?.email ?? '');

    redirect('/motes');
  }

  return (
    <div className="h-[calc(100vh-60px)] flex flex-col justify-center items-center p-4">
      <form
        action={action}
        className="border p-4 flex flex-col w-full max-w-xl"
      >
        <p>add new mote</p>
        <label htmlFor="content" className="border my-4">
          <textarea
            id="content"
            name="content"
            rows={5}
            required={true}
            className="w-full p-4"
          />
        </label>
        <button type="submit" className="border p-2">
          add
        </button>
      </form>
    </div>
  );
}
