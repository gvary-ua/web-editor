import React, { useContext, useState } from 'react';
import { P } from 'components/P';
import { Chapter } from 'types/chapters';
import DropDownMenu from 'components/DropDownMenu';
import { useChapterDelete } from 'apis/useChapters';
import { GlobalContext } from 'context/GlobalContext';

export default function ChapterRow({ chapter }: { chapter: Chapter }) {
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
                  deleteChapter(chapter.id);
                  if (activeChapter.get?.id === chapter.id) {
                    activeChapter.set(undefined);
                  }
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
