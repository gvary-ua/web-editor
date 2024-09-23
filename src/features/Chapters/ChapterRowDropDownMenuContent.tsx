import { Chapter } from 'apis/types/chapters';
import { useChapterDelete } from 'apis/useChapters';
import { P } from 'components/P';
import { GlobalContext } from 'context/GlobalContext';
import React, { useContext } from 'react';

export default function ChapterRowDropDownMenuContent({ chapter }: { chapter: Chapter }) {
  const { chapters } = useContext(GlobalContext);
  const { mutate: deleteChapter } = useChapterDelete();

  return (
    <div className="px-5 pb-5 sm:p-0">
      <P className="cursor-pointer">Вгору</P>
      <P className="mt-2 cursor-pointer">Вниз</P>
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
        Видалити
      </P>
    </div>
  );
}
