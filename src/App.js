import React, { useContext, useState } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import { Button } from './components/Button';
import PopUp from './components/PopUp';
import SideMenu from './components/SideMenu';
import useCurrentUser from './apis/useUser';
import Chapters from './components/Chapters';
import { GlobalContext } from './GlobalContext';
import { P } from './components/P';
import { useBlocksByChapterId } from './apis/useBlocks';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const coverId = parseInt(urlParams.get('coverId'));

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { activeChapter } = useContext(GlobalContext);
  const chapterId = activeChapter.get?.id;

  const {
    data: blocks,
    isError: isBlockError,
    isLoading: isBlockLoading,
  } = useBlocksByChapterId(chapterId, { enabled: !!chapterId });
  const { data: user, isError: isUserError, isLoading: isUserLoading } = useCurrentUser();

  const chapters = <Chapters coverId={coverId} />;

  if (isUserLoading | isBlockLoading) {
    return 'Loading...';
  }

  if (isBlockError) {
    return (
      <PopUp label={'Error loading blocks!'} show={isBlockError}>
        <div className="min-w-60"></div>
        <P>Please try reloading the page.</P>
        <Button onClick="window.location.reload();">Reload Page</Button>
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
        {chapters}
      </PopUp>
      <div className="flex h-auto max-h-[calc(100vh-3.5rem)] min-h-[calc(100vh-3.5rem)] w-full md:max-h-[calc(100vh-4.25rem)] md:min-h-[calc(100vh-4.25rem)] md:pl-20 ">
        <SideMenu className="hidden overflow-y-auto  pt-10 md:block">{chapters}</SideMenu>
        <main className="w-full overflow-y-auto px-3 py-3 md:px-20 md:pt-10">
          <Editor
            data={blocks}
            onChange={(data) => console.log(data.blocks)}
            editorblock="editorjs-container"
          />
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
