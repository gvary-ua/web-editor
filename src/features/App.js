import React, { useContext, useState, useEffect } from 'react';
import Header from 'features/Header';
import Editor from 'features/Editor/index';
import { Button } from 'components/Button';
import PopUp from 'components/PopUp';
import SideMenu from 'components/SideMenu';
import useCurrentUser from 'apis/useUser';
import Chapters from 'features/Chapters/Chapters';
import { GlobalContext } from 'context/GlobalContext';
import { P } from 'components/P';
import { useBlocksByChapterId, useBlocksCreate } from 'apis/useBlocks';
import { useChaptersByCoverId } from 'apis/useChapters';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const coverId = parseInt(urlParams.get('coverId'));

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { data: chapters, isSuccess: isChaptersSuccess } = useChaptersByCoverId(coverId);
  const { activeChapter } = useContext(GlobalContext);

  // This useEffect automatically assigns first chapter active
  // When we delete the active chapter we set it to undefined
  // Delete action will trigger change in `chapters` which trigger this useEffect
  useEffect(() => {
    if (
      isChaptersSuccess &&
      typeof activeChapter.get === 'undefined' &&
      typeof chapters !== 'undefined' &&
      chapters.length > 0
    ) {
      activeChapter.set(chapters[0]);
    }
  }, [isChaptersSuccess, chapters]);

  const {
    data: blocks,
    isError: isBlockError,
    isLoading: isBlockLoading,
  } = useBlocksByChapterId(activeChapter.get?.id, {
    enabled: !!activeChapter.get?.id,
    select: (dbBlocks) => {
      const editorBlocks = [];
      for (const block of dbBlocks) {
        editorBlocks.push(dbBlockToEditorBlock(block));
      }
      console.log('loaded blocks', editorBlocks);
      return editorBlocks;
    },
  });
  const { data: user, isError: isUserError, isLoading: isUserLoading } = useCurrentUser();

  const { mutate: createBlocks } = useBlocksCreate({ enabled: !!activeChapter.get?.id });

  if (isUserLoading | isBlockLoading) {
    return 'Loading...';
  }

  if (isBlockError) {
    return (
      <PopUp label={'Error loading blocks!'} show={isBlockError}>
        <div className="min-w-60"></div>
        <P>Please try reloading the page.</P>
        <Button onClick={() => window.location.reload()}>Reload Page</Button>
      </PopUp>
    );
  }

  if (isUserError) {
    return (
      <PopUp label={'Please login!'} show={isUserError}>
        {/* TODO: Put it in config */}
        {/* TODO: After I press login redirect me back to SPA */}
        <div className="min-w-60"></div>
        <Button className="mx-auto mt-4" href="http://localhost:8000/login">
          Login
        </Button>
      </PopUp>
    );
  }

  return (
    <React.Fragment>
      <Header user={user} onBurgerClick={() => setMobileNavOpen(!mobileNavOpen)} />

      <PopUp show={mobileNavOpen} setShow={setMobileNavOpen}>
        <Chapters coverId={coverId} chapters={chapters} />
      </PopUp>
      <div className="flex h-auto max-h-[calc(100vh-3.5rem)] min-h-[calc(100vh-3.5rem)] w-full md:max-h-[calc(100vh-4.25rem)] md:min-h-[calc(100vh-4.25rem)] md:pl-20 ">
        <SideMenu className="hidden overflow-y-auto  pt-10 md:block">
          <Chapters coverId={coverId} chapters={chapters} />
        </SideMenu>
        <main className="w-full overflow-y-auto px-3 py-3 md:px-20 md:pt-10">
          <Editor
            data={blocks}
            onChange={(data) => {
              const editorBlocks = data.blocks;
              console.log('Preparing to save blocks', editorBlocks);
              // Create request
              const dbBlocks = [];
              for (const eBlock of editorBlocks) {
                dbBlocks.push(editorBlockToDbBlock(eBlock));
              }

              console.log('Requesting to save blocks', dbBlocks);

              createBlocks({
                chapterId: activeChapter.get?.id,
                blocks: {
                  blocks: dbBlocks,
                },
              });
            }}
            editorblock="editorjs-container"
          />
        </main>
      </div>
    </React.Fragment>
  );
}

function editorBlockTypeToId(type) {
  switch (type) {
    case 'header':
      return 1;
    case 'paragraph':
      return 2;
    case 'list':
      return 3;
    case 'checkList':
      return 4;
    case 'delimiter':
      return 5;
    default:
      throw new Error('This type is not supported!', type);
  }
}

function dbBlockTypeIdToString(type) {
  switch (type) {
    case 1:
      return 'header';
    case 2:
      return 'paragraph';
    case 3:
      return 'list';
    case 4:
      return 'checkList';
    case 5:
      return 'delimiter';
    default:
      throw new Error('This id is not supported!', type);
  }
}

function editorBlockToDbBlock(editorBlock) {
  return {
    id: editorBlock.id,
    typeId: editorBlockTypeToId(editorBlock.type),
    data: editorBlock.data,
    dataVersion: editorBlock.tunes.versionTune.version,
    wordCount: 0,
  };
}

function dbBlockToEditorBlock(dbBlock) {
  return {
    id: dbBlock.id,
    data: dbBlock.data,
    type: dbBlockTypeIdToString(dbBlock.typeId),
  };
}
export default App;
