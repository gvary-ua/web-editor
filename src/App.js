import React from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import { Button } from './components/Button';
import PopUp from './components/PopUp';
import SideMenu from './components/SideMenu';
import useCurrentUser from './apis/useUser';
import Chapters from './components/Chapters';

const INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: 'header',
      data: {
        text: 'This is my awesome editor!',
        level: 1,
      },
    },
  ],
};

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const coverId = urlParams.get('coverId');

  const [data, setData] = React.useState(INITIAL_DATA);
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  const { data: user, isError, isLoading } = useCurrentUser();

  const chapters = <Chapters coverId={coverId} />;

  if (isLoading) {
    return 'Loading...';
  }

  if (isError) {
    return (
      <PopUp label={'Please login!'} show={isError}>
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
      <div className="flex h-auto w-full overflow-y-hidden px-20 pt-10">
        <SideMenu className="hidden md:block">{chapters}</SideMenu>
        <main className="w-full pl-9">
          <Editor data={data} onChange={setData} editorblock="editorjs-container" />
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
