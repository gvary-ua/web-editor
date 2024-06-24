import React from 'react';
import { P } from './P';
import { useChapterCreate, useChaptersByCoverId } from '../apis/useChapters';

export default function Chapters({ coverId }: { coverId: number }) {
  const { data: chapters } = useChaptersByCoverId(coverId);
  const { mutate: createChapter } = useChapterCreate(coverId);
  return (
    <>
      <div className="flex w-full items-center justify-between py-5">
        <P size="lg" weight="med">
          Розділи:
        </P>
        <img
          src="./icons/plus.svg"
          alt="Add chapter icon"
          className="w-4 cursor-pointer"
          onClick={() => {
            createChapter({ coverId: coverId, title: 'Нова глава' });
          }}
        />
      </div>
      {chapters?.map((c) => {
        return <div key={c.id}>{c.title}</div>;
      })}
    </>
  );
}
