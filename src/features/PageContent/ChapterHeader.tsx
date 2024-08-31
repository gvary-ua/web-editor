import React, { useContext } from 'react';
import { GlobalContext } from 'context/GlobalContext';
import { H } from 'components/H';

export default function ChapterHeader() {
  const { activeChapter } = useContext(GlobalContext);

  return (
    <H className="pb-[3px] pt-[0.6em]" level="h4">
      {activeChapter.get?.title}
    </H>
  );
}
