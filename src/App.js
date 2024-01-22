import React, { useState } from "react";
import Editor from "./Editor";
import Nav from "./components/Nav";
import Header from "./components/Header";

// Initial Data
const INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "This is my awesome editor!",
        level: 1,
      },
    },
  ],
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  return (
    <div className="flex flex-col h-full">
      <Header/>
      <div className="flex w-full h-full overflow-y-hidden">
        <Nav className="h-full"/>
        <main className="py-4 w-full overflow-y-scroll">
          <Editor data={data} onChange={setData} editorblock="editorjs-container" />
        </main>
      </div>
    </div>
  );
}

export default App;