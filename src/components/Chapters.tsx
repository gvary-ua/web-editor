import React, { useContext, useEffect } from 'react';
import { P } from './P';
import { useChapterCreate, useChaptersByCoverId } from '../apis/useChapters';
import { Chapter } from '../types/chapters';
import ChapterRow from './ChapterRow';
import { GlobalContext } from '../GlobalContext';

export default function Chapters({ coverId }: { coverId: number }) {
  const { data: chapters, isSuccess } = useChaptersByCoverId(coverId);
  const { mutate: createChapter } = useChapterCreate();
  const { activeChapter } = useContext(GlobalContext);

  useEffect(() => {
    if (
      isSuccess &&
      typeof activeChapter.get === 'undefined' &&
      typeof chapters !== 'undefined' &&
      chapters.length > 0
    ) {
      activeChapter.set(chapters[0]);
    }
  }, [isSuccess]);

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
        return <ChapterRow key={chapter.id} chapter={chapter} chapters={chapters}></ChapterRow>;
      })}
    </>
  );
}
