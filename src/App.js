import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Editor from './components/Editor';

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

  return (
    <React.Fragment>
      <Header />

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
