import React, { useContext, useEffect, useRef } from 'react';
import Editor from './Editor';
import { useBlocksByChapterId, useBlocksCreate } from 'apis/useBlocks';
import { GlobalContext } from 'context/GlobalContext';
import { OutputData } from '@editorjs/editorjs';
import { editorBlockToDbBlock } from 'functions/mapper';
import debounce from 'functions/useDebounce';

export default function AliveEditorJs() {
  const { activeChapter, i18n } = useContext(GlobalContext);

  const {
    data: blocks,
    isError: isBlockError,
    isLoading: isBlockLoading,
  } = useBlocksByChapterId(activeChapter?.id, { enabled: !!activeChapter });

  const { mutate: createBlocks } = useBlocksCreate();

  const saveData = (id, data) => {
    const editorBlocks = data.blocks;
    const dbBlocks = [];
    for (const eBlock of editorBlocks) {
      dbBlocks.push(editorBlockToDbBlock(eBlock));
    }
    createBlocks({
      chapterId: activeChapter?.id,
      blocks: dbBlocks,
    });
  };

  // Debounce to save data every N seconds
  const debouncedSaveData = debounce(saveData, 1_000);

  if (isBlockLoading) {
    return <div>Loading blocks...</div>;
  }

  if (isBlockError) {
    return <div>Error loading blocks!</div>;
  }

  return (
    <Editor
      data={blocks as OutputData}
      i18n={i18n['EditorJs']}
      onChange={debouncedSaveData}
      onDestroy={saveData}
      id={activeChapter?.id}
    />
  );
}
