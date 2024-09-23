import React, { useContext } from 'react';
import AliveEditorJs from 'features/Editor/AliveEditorJs';
import CoverHeader from './CoverHeader';
import ChapterHeader from './ChapterHeader';
import { GlobalContext } from 'context/GlobalContext';

export default function PageContent() {
  const { cover } = useContext(GlobalContext);

  return (
    <React.Fragment>
      <CoverHeader />
      {cover.coverType === 1 && <ChapterHeader />}
      <div className="my-4 border-b border-b-surface-1"></div>
      <AliveEditorJs />
    </React.Fragment>
  );
}
