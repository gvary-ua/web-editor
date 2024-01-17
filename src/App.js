import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";

function App() {
  // Creates a new editor instance.
  const editor = useBlockNote({});

  // Renders the editor instance using a React component.
  return <BlockNoteView theme="light" editor={editor} />;
}

export default App;
