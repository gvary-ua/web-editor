import Paragraph from '@editorjs/paragraph';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Delimiter from '@editorjs/delimiter';
import CheckList from '@editorjs/checklist';

import Strikethrough from '@sotaproject/strikethrough';
import Underline from '@editorjs/underline';
import VersionBlockTune from './VersionBlockTune';

export const EDITOR_JS_TOOLS = {
  strikethrough: Strikethrough,
  underline: Underline,
  header: {
    class: Header,
    inlineToolbar: true,
    config: {
      placeholder: 'Enter a header',
      levels: [1, 2, 3],
      defaultLevel: 2,
    },
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
    config: {
      placeholder: 'Enter a text',
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
  versionTune: {
    class: VersionBlockTune,
    // Here you must list all blocks that we are using and their version.
    // Follow semantic versioning.
    // If you add, remove or change data content of a block, then you must bump the version.
    config: {
      blockVersions: {
        header: '1.0.0',
        paragraph: '1.0.0',
        list: '1.0.0',
        checkList: '1.0.0',
        delimiter: '1.0.0',
      },
    },
  },
};
