import { Mote } from '@/components/Mote';
import { getAllMotes } from '@/lib/getAllMotes';

export const dynamic = 'force-dynamic';

export default async function MotesPage() {
  const motes = await getAllMotes();

  return motes.length ? (
    <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {motes.map((mote) => (
        <Mote key={mote.id} mote={mote} />
      ))}
    </div>
  ) : (
    <div className="h-[calc(100vh-60px)] flex justify-center items-center">
      <p>Start adding a mote</p>
    </div>
  );
}
