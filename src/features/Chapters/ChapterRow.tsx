import React, { useContext, useState } from 'react';
import { P } from 'components/P';
import { Chapter } from 'apis/types/chapters';
import DropDownMenu from 'components/DropDownMenu';
import { GlobalContext } from 'context/GlobalContext';
import ChapterRowDropDownMenuContent from './ChapterRowDropDownMenuContent';

export default function ChapterRow({ chapter }: { chapter: Chapter }) {
  const { activeChapter } = useContext(GlobalContext);
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="relative mt-4 flex w-full items-center justify-between">
      <P
        size="base"
        className={
          'cursor-pointer ' + (chapter.id === activeChapter.get?.id ? '' : 'text-secondary-2')
        }
        onClick={() => activeChapter.set(chapter)}
      >
        {chapter.id === activeChapter.get?.id ? activeChapter.get?.title : chapter.title}
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
          <ChapterRowDropDownMenuContent chapterId={chapter.id} />
        </DropDownMenu>
      )}
    </div>
  );
}
