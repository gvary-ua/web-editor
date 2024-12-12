import React, { memo, useEffect, useRef } from 'react';
import EditorJS, { API } from '@editorjs/editorjs';
import Undo from 'editorjs-undo';
import DragDrop from 'editorjs-drag-drop';
import { EDITOR_JS_TOOLS } from './editor.config';
import { OutputData } from '@editorjs/editorjs/types/data-formats';

interface IEditor {
  data: OutputData;
  i18n: any;
  onChange: (id: number, data: OutputData) => void;
  onDestroy: (id: number, data: OutputData) => void;
  id: number;
}

// Note: At the moment EditorJS is recreated at every chapter change
// It could lead to performance issues.
// It would be cool to save it all somehow to not reinitilize
const Editor: React.FC<IEditor> = ({ data, i18n, onChange, onDestroy, id }) => {
  const holderId = `editorjs-container-chapter-${id}`;
  useEffect(() => {
    const editor = new EditorJS({
      holder: holderId,
      tools: EDITOR_JS_TOOLS,
      tunes: ['versionTune'],
      data: data,
      minHeight: 20,
      onReady: () => {
        new Undo({ editor });
        new DragDrop(editor);
      },
      onChange: async (api: API) => {
        const data = await api.saver.save();
        onChange(id, data);
      },
      i18n: i18n,
    });

    return () => {
      if (editor && editor.destroy) {
        editor.save().then((data) => onDestroy(id, data));
        editor.destroy();
      }
    };
  }, [id, i18n]);
  return <div id={holderId} className="h-auto w-full" />;
};

export default Editor;
