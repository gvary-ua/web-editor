import React, { useState } from "react";
import Editor from "./Editor";

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
    <Editor data={data} onChange={setData} editorblock="editorjs-container" />
  );
}

export default App;