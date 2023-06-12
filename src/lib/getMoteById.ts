import mysql from 'mysql2/promise';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { config } from '@/config';
import { MoteType } from '@/components/Mote';

export async function getMoteById(id: string) {
  const session = await getServerSession(authOptions);

  const db = await mysql.createConnection(config.db.url);

  const [row] = await db.execute(
    `SELECT * FROM mote WHERE mote.id = ? AND mote.created_by = ?`,
    [id, session?.user?.email]
  );

  return row as MoteType[];
}
