import React from 'react';
import AliveEditorJs from 'features/Editor/AliveEditorJs';
import CoverHeader from './CoverHeader';
import ChapterHeader from './ChapterHeader';

export default function PageContent() {
  return (
    <React.Fragment>
      <CoverHeader />
      <ChapterHeader />
      <div className="my-4 border-b border-b-surface-1"></div>
      <AliveEditorJs />
    </React.Fragment>
  );
}
