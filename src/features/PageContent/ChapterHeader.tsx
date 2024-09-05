import React, { useContext } from 'react';
import { GlobalContext } from 'context/GlobalContext';
import { useChapterPartialUpdate } from 'apis/useChapters';

export default function ChapterHeader() {
  const { activeChapter } = useContext(GlobalContext);
  const { mutate: updateTitle } = useChapterPartialUpdate();

  return (
    <input
      autoCorrect="on"
      spellCheck="true"
      type="text"
      placeholder="Назва глави"
      value={activeChapter.get?.title || ''}
      className="mb-[3px] mt-[0.6em] w-full rounded-md font-robotoFlex text-[2rem] leading-[2rem] hover:bg-surface-2"
      onChange={(e) => activeChapter?.set({ ...activeChapter.get, title: e.target.value })}
      onBlur={(e) => updateTitle({ id: activeChapter.get?.id, title: e.target.value })}
    ></input>
  );
}
