import { useChapterDelete } from 'apis/useChapters';
import { P } from 'components/P';
import React from 'react';

export default function ChapterRowDropDownMenuContent({ chapterId }: { chapterId: number }) {
  const { mutate: deleteChapter } = useChapterDelete();

  return (
    <div className="px-5 pb-5 sm:p-0">
      <P className="cursor-pointer">Вгору</P>
      <P className="mt-2 cursor-pointer">Вниз</P>
      <P
        className="mt-2 cursor-pointer text-error"
        onClick={() => {
          deleteChapter(chapterId);
        }}
      >
        Видалити
      </P>
    </div>
  );
}
