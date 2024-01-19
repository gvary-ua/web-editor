import React, { memo, useEffect, useRef } from "react";
import EditorJS, { API, BlockAddedEvent, BlockChangedEvent, BlockMovedEvent, BlockMutationEvent, BlockRemovedEvent } from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./editor.config";

const Editor = ({ data, onChange, editorblock }) => {
  const ref = useRef<EditorJS>();
  //Initialize editorjs
  useEffect(() => {
    //Initialize editorjs if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: editorblock,

        tools: EDITOR_JS_TOOLS,
        data: data,
        async onChange(api: API, event: BlockMutationEvent | BlockMutationEvent[]) {
          const data = await api.saver.save();
          onChange(data);

          if (Array.isArray(event)) {
            for (let i = 0; i < event.length; i++) {
              processEvent(event[i]);
            }
          } else {
            processEvent(event);
          }
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
  }, []);
  return <div id={editorblock} />;
};

function processEvent(event: BlockMutationEvent) {
  switch (event.type) {
    case "block-added": {
      const e: BlockAddedEvent = event as BlockAddedEvent;
      console.log("block-added", e.detail.index, e.detail.target.id);
    }
      break;
    case "block-removed":  {
    let e: BlockRemovedEvent = event as BlockRemovedEvent;
      console.log("block-removed", e.detail.index, e.detail.target.id);
    }
      break;
    case "block-changed": {
      let e: BlockChangedEvent = event as BlockChangedEvent;
      console.log("block-changed", e.detail.index, e.detail.target.id);
    }
      break;
    case "block-moved": {
      let e: BlockMovedEvent = event as BlockMovedEvent;
      console.log("block-moved", e.detail.fromIndex, e.detail.toIndex, e.detail.target.id);
    }
      break;
    default: console.log("other");
      break;
  }
}

export default memo(Editor);