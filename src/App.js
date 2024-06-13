import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Editor from './components/Editor';
import { getCurrentUser } from './ApiClient';
import { Button } from './components/Button';

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

  React.useEffect(() => {
    getCurrentUser()
      .then((result) => {
        setUser(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        // TODO: Show popup with redirect to login page. And when logged in it should redirect back to editor
        // TODO: ignore 429 too many requests
      });
  }, []);

  return (
    <React.Fragment>
      <Header user={user} />

      <div className="flex h-auto min-h-full w-full overflow-y-hidden">
        <Nav />
        <main className="w-full p-4 sm:pl-24">
          <Editor data={data} onChange={setData} editorblock="editorjs-container" />
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
