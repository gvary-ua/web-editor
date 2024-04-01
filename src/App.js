import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Editor from './Editor';
import { Badge } from './components/Badge';

const INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: 'paragraph',
      data: {
        text: 'A long time ago',
        level: 1,
      },
    },
  ],
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const [titleName, setTitle] = useState('Title Name');
  const [badge, setBadge] = useState('Book');
  const [chapters, setChapters] = useState(['Chapter Name']);

  const requestData = () => {
    setData(INITIAL_DATA);
    setTitle('Title Name');
    setChapters(['Chapter Name']);
    setBadge('Book');
  }

  useEffect(()=>{
    requestData();
  },[]);

  return (
    <React.Fragment>
      <Header>
        <div>
          {titleName} <Badge size="xs">{badge}</Badge>
        </div>
      </Header>
      <main className="ml-auto mr-auto mt-10 w-7/12">
        <div>{chapters}</div>
        <div className="w-8/12 pt-5">
          <Editor data={data} onChange={setData} editorblock="editorjs-container" />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
