import Link from 'next/link';
import { deleteMoteById } from '@/lib/deleteMoteById';
import { editMoteById } from '@/lib/editMoteById';
import { getMoteById } from '@/lib/getMoteById';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function EditPage({ params }: { params: { id: string } }) {
  const [mote] = await getMoteById(params.id);

  async function action(data: FormData) {
    'use server';
    const isEditing = data.has('edit');

    if (isEditing) {
      const content = data.get('content') as string;
      await editMoteById(params.id, content);
    } else {
      await deleteMoteById(params.id);
    }

    redirect('/motes');
  }

  return (
    <div className="h-[calc(100vh-60px)] flex flex-col justify-center items-center p-4 border">
      <form
        action={action}
        className="border p-4 flex flex-col w-full max-w-xl"
      >
        <p>edit mote #{params.id}</p>
        <label htmlFor="content" className="border my-4">
          <textarea
            id="content"
            name="content"
            rows={5}
            className="w-full p-4"
            defaultValue={mote.content}
            required={true}
          />
        </label>
        <div className="flex gap-4">
          <input
            type="submit"
            name="edit"
            value="edit"
            className="border p-2 flex-1"
          />
          <input
            type="submit"
            name="delete"
            value="delete"
            className="border p-2 flex-1"
          />
          <Link href="/motes" className="border p-2 flex-1 text-center">
            cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
