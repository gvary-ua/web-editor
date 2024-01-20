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
    <div className="flex">
      <Nav />
      <div className="w-full">
        <Header />
        <main className="py-4">
          <Editor data={data} onChange={setData} editorblock="editorjs-container" />
        </main>
      </div>
    </div>
  );
}

export default App;