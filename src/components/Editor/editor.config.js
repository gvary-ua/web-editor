import Paragraph from '@editorjs/paragraph';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Delimiter from '@editorjs/delimiter';
import CheckList from '@editorjs/checklist';

import Strikethrough from '@sotaproject/strikethrough';
import Underline from '@editorjs/underline';

export const EDITOR_JS_TOOLS = {
  strikethrough: Strikethrough,
  underline: Underline,
  header: {
    class: Header,
    inlineToolbar: true,
    config: {
      placeholder: 'Enter a header....',
      levels: [1, 2, 3],
      defaultLevel: 2,
    },
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
    config: {
      placeholder: 'Enter a text....',
    },
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  checkList: {
    class: CheckList,
    inlineToolbar: true,
  },
  delimiter: Delimiter,
};
