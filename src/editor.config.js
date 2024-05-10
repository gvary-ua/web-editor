// Blocks
import Paragraph from '@editorjs/paragraph';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Link from '@editorjs/link';
import Delimiter from '@editorjs/delimiter';
import CheckList from '@editorjs/checklist';
import Table from '@editorjs/table';

//Tools
import Strikethrough from '@sotaproject/strikethrough';
import Underline from '@editorjs/underline';

export const EDITOR_JS_TOOLS = {
  strikethrough: Strikethrough,
  underline: Underline,
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
    config: {
      placeholder: 'Enter a text....',
    },
  },
  //
  checkList: {
    class: CheckList,
    inlineToolbar: true,
  },
  //
  list: {
    class: List,
    inlineToolbar: true,
  },
  //
  header: {
    class: Header,
    inlineToolbar: true,
    config: {
      placeholder: 'Enter a header....',
      levels: [1, 2, 3],
      defaultLevel: 2,
    },
  },
  //
  delimiter: Delimiter,
  //
  link: {
    class: Link,
    inlineToolbar: true,
  },
  //
  table: {
    class: Table,
    inlineToolbar: true,
    config: {
      withHeadings: true, // I don't know why it doesn't work.
      rows: 2,
      cols: 3,
    },
  },
};
