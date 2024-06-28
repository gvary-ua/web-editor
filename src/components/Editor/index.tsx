import React, { memo, useEffect, useRef } from 'react';
import EditorJS, { API } from '@editorjs/editorjs';
import Undo from 'editorjs-undo';
import DragDrop from 'editorjs-drag-drop';

// Local config
import { EDITOR_JS_TOOLS } from './editor.config';

// Types
import { OutputData } from '@editorjs/editorjs/types/data-formats';
interface IEditor {
  data: OutputData;
  onChange: (data: OutputData) => void;
  editorblock: string;
}

const Editor: React.FC<IEditor> = ({ data, onChange, editorblock }) => {
  const ref = useRef<EditorJS>();
  //Initialize editorjs
  useEffect(() => {
    //Initialize editorjs if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: editorblock,
        tools: EDITOR_JS_TOOLS,
        data: data,
        minHeight: 20,
        onReady() {
          new DragDrop(editor);
          new Undo({ editor });
        },
        async onChange(api: API) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
      ref.current = editor;
    }

    //Add a return function to handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div id={editorblock} className="h-auto w-full" />;
};

export default memo(Editor);
