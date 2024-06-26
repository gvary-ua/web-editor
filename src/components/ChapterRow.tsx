import React, { useContext, useState } from 'react';
import { P } from './P';
import { Chapter } from '../types/chapters';
import DropDownMenu from './DropDownMenu';
import { useChapterDelete } from '../apis/useChapters';
import { GlobalContext } from '../GlobalContext';

export default function ChapterRow({
  chapter,
  chapters,
}: {
  chapter: Chapter;
  chapters: Chapter[];
}) {
  const [showDropDown, setShowDropDown] = useState(false);
  const { mutate: deleteChapter } = useChapterDelete();
  const { activeChapter } = useContext(GlobalContext);

  return (
    <>
      <div className="relative mt-4 flex w-full items-center justify-between">
        <P
          size="base"
          className={
            'cursor-pointer ' + (chapter.id === activeChapter.get?.id ? '' : 'text-secondary-2')
          }
          onClick={() => activeChapter.set(chapter)}
        >
          {chapter.title}
        </P>
        <img
          src="./icons/vertical-three-dots.svg"
          alt="Action on chapter"
          className="w-4 cursor-pointer"
          onClick={() => {
            setShowDropDown(true);
          }}
        />
        {showDropDown && (
          <DropDownMenu show={showDropDown} setShow={setShowDropDown}>
            <div className="px-5 pb-5 sm:p-0">
              <P className="cursor-pointer">Вгору</P>
              <P className="mt-2 cursor-pointer">Вниз</P>
              <P
                className="mt-2 cursor-pointer text-error"
                onClick={() => {
                  deleteChapter(chapter.id, {
                    onSuccess: () => {
                      console.log('my on success');
                      if (
                        chapter.id === activeChapter.get?.id &&
                        typeof activeChapter.get === 'undefined' &&
                        typeof chapters !== 'undefined' &&
                        chapters.length > 0
                      ) {
                        activeChapter.set(chapters[0]);
                      } else {
                        activeChapter.set(undefined);
                      }
                    },
                  });
                }}
              >
                Видалити
              </P>
            </div>
          </DropDownMenu>
        )}
      </div>
    </>
  );
}
