import mysql from 'mysql2/promise';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { config } from '@/config';
import { getServerSession } from 'next-auth';

export async function editMoteById(id: string, content: string) {
  const session = await getServerSession(authOptions);

  const db = await mysql.createConnection(config.db.url);

  await db.execute(
    `UPDATE mote SET mote.content = ? WHERE mote.id = ? AND mote.created_by = ?`,
    [content, id, session?.user?.email]
  );
}
