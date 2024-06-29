import React, { useContext, useEffect } from 'react';
import { P } from 'components/P';
import { useChapterCreate, useChaptersByCoverId } from 'apis/useChapters';
import ChapterRow from './ChapterRow';
import { GlobalContext } from 'context/GlobalContext';

export default function Chapters() {
  const { activeChapter, coverId } = useContext(GlobalContext);
  const { data: chapters, isSuccess: isChaptersSuccess } = useChaptersByCoverId(coverId);
  const { mutate: createChapter } = useChapterCreate();

  // This useEffect automatically assigns first chapter active
  // When we delete the active chapter we set it to undefined
  // Delete action will trigger change in `chapters` which trigger this useEffect
  useEffect(() => {
    if (
      isChaptersSuccess &&
      typeof activeChapter.get === 'undefined' &&
      typeof chapters !== 'undefined' &&
      chapters.length > 0
    ) {
      activeChapter.set(chapters[0]);
    }
    // I didn't put activeChapter here as a dependency, because on delete I set it to undefined, which triggers reload.
  }, [isChaptersSuccess, chapters]);

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
