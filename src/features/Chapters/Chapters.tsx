import React from 'react';
import { P } from 'components/P';
import { useChapterCreate } from 'apis/useChapters';
import ChapterRow from './ChapterRow';
import { Chapter } from 'types/chapters';

export default function Chapters({ coverId, chapters }: { coverId: number; chapters: Chapter[] }) {
  const { mutate: createChapter } = useChapterCreate();

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
      {chapters?.map((chapter) => {
        return <ChapterRow key={chapter.id} chapter={chapter}></ChapterRow>;
      })}
    </>
  );
}
