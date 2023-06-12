import mysql from 'mysql2/promise';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { config } from '@/config';
import { getServerSession } from 'next-auth';

export async function deleteMoteById(id: string) {
  const session = await getServerSession(authOptions);

  const db = await mysql.createConnection(config.db.url);

  await db.execute(
    `DELETE FROM mote WHERE mote.id = ? AND mote.created_by = ?`,
    [id, session?.user?.email]
  );
}
