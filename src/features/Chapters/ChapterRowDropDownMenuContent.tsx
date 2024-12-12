import { Chapter } from 'apis/types/chapters';
import { useChapterDelete } from 'apis/useChapters';
import { useCoverUpdate } from 'apis/useCover';
import { P } from 'components/P';
import { GlobalContext } from 'context/GlobalContext';
import React, { useContext } from 'react';

export default function ChapterRowDropDownMenuContent({ chapter }: { chapter: Chapter }) {
  const { cover, chapters, i18n } = useContext(GlobalContext);
  const { mutate: deleteChapter } = useChapterDelete();
  const { mutate: updateCoverChapters } = useCoverUpdate();

  const moveChapter = (direction: 'up' | 'down') => {
    const currentIndex = chapters.findIndex((ch) => ch.id === chapter.id);

    if (
      (direction === 'up' && currentIndex > 0) ||
      (direction === 'down' && currentIndex < chapters.length - 1)
    ) {
      const newChapters = [...chapters];
      const swapIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;

      [newChapters[currentIndex], newChapters[swapIndex]] = [
        newChapters[swapIndex],
        newChapters[currentIndex],
      ];

      const chapterIds = newChapters.map((ch) => ch.id);

      updateCoverChapters({ coverId: cover.id, chapter_ids: chapterIds });
    }
  };

  const currentIndex = chapters.findIndex((ch) => ch.id === chapter.id);
  const isMoveUpDisabled = currentIndex === 0;
  const isMoveDownDisabled = currentIndex === chapters.length - 1;

  return (
    <div className="px-5 pb-5 sm:p-0">
      <P
        className={`cursor-pointer ${isMoveUpDisabled ? 'cursor-not-allowed text-[rgb(156,163,175)]' : ''}`}
        onClick={() => moveChapter('up')}
      >
        {i18n['Up']}
      </P>
      <P
        className={`mt-2 cursor-pointer ${isMoveDownDisabled ? 'cursor-not-allowed text-[rgb(156,163,175)]' : ''}`}
        onClick={() => moveChapter('down')}
      >
        {i18n['Down']}
      </P>
      <P
        className="mt-2 cursor-pointer text-error"
        onClick={() => {
          if (chapters.length === 1) {
            alert('Неможливо видалити останню главу! Книга має мати хоча б одну главу!');
          } else if (window.confirm(`Дійсно бажаєш видалити главу "${chapter.title}"?`)) {
            deleteChapter(chapter.id);
          }
        }}
      >
        {i18n['Delete']}
      </P>
    </div>
  );
}
