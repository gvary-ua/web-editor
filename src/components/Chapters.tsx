import React from 'react';
import { P } from './P';
import { useChapterCreate, useChaptersByCoverId } from '../apis/useChapters';
import { Chapter } from '../types/chapters';

export default function Chapters({
  coverId,
  activeChapter,
  setActiveChapter,
}: {
  coverId: number;
  activeChapter: Chapter | undefined;
  setActiveChapter: React.Dispatch<React.SetStateAction<Chapter>>;
}) {
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
      {chapters?.map((chapter) => {
        return (
          <P
            size="base"
            className={
              'mt-4 cursor-pointer ' + (chapter.id === activeChapter?.id ? '' : 'text-secondary-2')
            }
            key={chapter.id}
            onClick={() => setActiveChapter(chapter)}
          >
            {chapter.title}
          </P>
        );
      })}
    </>
  );
}
