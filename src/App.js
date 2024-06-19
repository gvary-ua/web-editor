import React from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import { getCurrentUser } from './ApiClient';
import { Button } from './components/Button';
import { P } from './components/P';
import PopUp from './components/PopUp';
import SideMenu from './components/SideMenu';

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
  const [data, setData] = React.useState(INITIAL_DATA);
  const [user, setUser] = React.useState({ login: '' });
  const [pleaseLogin, setPleaseLogin] = React.useState(false);

  React.useEffect(() => {
    getCurrentUser()
      .then((result) => {
        setUser(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        // TODO: Show popup with redirect to login page. And when logged in it should redirect back to editor
        // TODO: ignore 429 too many requests
        setPleaseLogin(true);
      });
  }, []);

  return (
    <React.Fragment>
      <Header user={user} />
      <PopUp label={'Please login!'} show={pleaseLogin} setShow={setPleaseLogin}>
        {/* TODO: Put it in config */}
        {/* TODO: After I press login redirect me back to SPA */}
        <Button className="mx-auto mt-4" href="http://localhost:8000/login">
          Login
        </Button>
      </PopUp>
      <div className="flex h-auto min-h-full w-full overflow-y-hidden px-20 pt-10">
        <SideMenu>
          <P size="lg" weight="med">
            Розділи:
          </P>
        </SideMenu>
        <main className="w-full p-4 sm:pl-24">
          <Editor data={data} onChange={setData} editorblock="editorjs-container" />
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
