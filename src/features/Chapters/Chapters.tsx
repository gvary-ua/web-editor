import React, { useContext } from 'react';
import { P } from 'components/P';
import { useChapterCreate } from 'apis/useChapters';
import ChapterRow from './ChapterRow';
import { GlobalContext } from 'context/GlobalContext';
import LangSelector from 'components/LangSelector';

export default function Chapters() {
  const { chapters, coverId, i18n } = useContext(GlobalContext);
  const { mutate: createChapter } = useChapterCreate();

  return (
    <>
      <LangSelector className="flex sm:hidden" />
      <div className="flex w-full items-center justify-between py-5">
        <P size="lg" weight="med">
          {i18n['Chapters']}:
        </P>
        <img
          src="./icons/plus.svg"
          alt="Add chapter icon"
          className="w-4 cursor-pointer"
          onClick={() => {
            createChapter({ coverId: coverId, title: i18n['New chapter'] });
          }}
        />
      </div>
      {chapters?.map((chapter) => {
        return <ChapterRow key={chapter.id} chapter={chapter}></ChapterRow>;
      })}
    </>
  );
}
