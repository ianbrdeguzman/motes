import mysql from 'mysql2/promise';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { config } from '@/config';
import { getServerSession } from 'next-auth';
import { MoteType } from '@/components/Mote';

export async function getAllMotes() {
  const session = await getServerSession(authOptions);

  const db = await mysql.createConnection(config.db.url);

  const [rows] = await db.execute(
    `SELECT * FROM mote WHERE mote.created_by = ?`,
    [session?.user?.email]
  );

  const motes: MoteType[] = (rows as any[]).map((row) => ({
    id: row.id,
    content: row.content,
    createdBy: row.created_by,
    createdAt: row.created_at
  }));

  return motes;
}
