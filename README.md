# Web editor

Web editor is a Notion-like SPA. It is a block-based text editor which is fine-tuned for the authors.

Before executing npm commands set your Node to `lts/hydrogen`, or `v18.16.1`.

- `nvm use lts/hydrogen` - set Node version that we use
- `npm start` - start dev server
- `npm run build` - build optimized version

## Editor JS setup

We use [EditorJs](https://editorjs.io/) as our main driver for text editing. It has rich collection of plugins, and nice adaptive UI is built-in. However it also has some limitations, namely, the lack of built-in realtime collaboration, flat structure only (children blocks are almost impossible to make and maintain).

Every plugin has it's own defined data structure. So I will list all plugins that we use and document the data structure they provide for clarity.

### Supported blocks

| **Block name**   | **GitHub link**                                                                            | **Will be in Gvary** | **Ready to use** |
|------------------|--------------------------------------------------------------------------------------------|----------------------|------------------|
| Paragraph        | [@editorjs/paragraph](https://github.com/editor-js/paragraph)                              |                1.0.0 |         ✅        |
| Header           | [@editorjs/header ](https://github.com/editor-js/header)                                   |                1.0.0 |         ✅        |
| List             | [@editorjs/nested-list](https://github.com/editor-js/nested-list)                          |                1.0.0 |         ✅        |
| Table            | [@editorjs/table](https://github.com/editor-js/table)                                      |                1.0.0 |         ✅        |
| Delimiter        | [@editorjs/delimiter](https://github.com/editor-js/delimiter)                              |                1.0.0 |         ✅        |
| Quote            | [@editorjs/quote](https://github.com/editor-js/quote)                                      |                1.1.0 |         ❌        |
| Image            | [@editorjs/image](https://github.com/editor-js/image)                                      |                1.2.0 |         ❌        |
| Attachments      | [@editorjs/attaches](https://github.com/editor-js/attaches)                                |                    ? |         ❌        |
| Panel            | doesn't exist                                                                              |                    ? |         ❌        |

### Supported features

| **Feature name** | **GitHub link**                                                                                      | **Will be in Gvary** | **Ready to use** |
| Bold             | built-in                                                                                             |                1.0.0 |         ✅        |
| Italic           | built-in                                                                                             |                1.0.0 |         ✅        |
| Strikethrough    | [@sotaproject/strikethrough](https://www.npmjs.com/package/@sotaproject/strikethrough)               |                1.0.0 |         ✅        |
| Underline        | [@editorjs/underline](https://github.com/editor-js/underline)                                        |                1.0.0 |         ✅        |
| Undo/Redo        | [editorjs-undo](https://github.com/kommitters/editorjs-undo)                                         |                1.0.0 |         ✅        |
| Drag&Drop        | [editorjs-drag-drop](https://github.com/kommitters/editorjs-drag-drop)                               |                1.0.0 |         ✅        |
| Alignment        | [editorjs-text-alignment-blocktune](https://www.npmjs.com/package/editorjs-text-alignment-blocktune) | 1.1.0                |         ❌        |
| Change case      | [editorjs-change-case](https://github.com/maziyank/editorjs-change-case)                             |                    ? |         ✅        |
| Spoiler          | [editorjs-inline-spoiler-tool](https://www.npmjs.com/package/editorjs-inline-spoiler-tool)           |                    ? |         ❌        |
| Indentation      | [editorjs-indent-tune](https://www.npmjs.com/package/editorjs-indent-tune)                           |                    ? |         ✅        |
| Text color       | [editorjs-text-color-plugin](https://www.npmjs.com/package/editorjs-text-color-plugin)               |                    ? |         ❌        |
| Text background  | doesn't exist                                                                                        |                    ? |         ❌        |

### Block data

This section defines data example and JSON schema for every block.

EditorJS uses [nanoid](https://www.npmjs.com/package/nanoid) for generating unique IDs for blocks. To be more specific, [it generates IDs of 10 characters long](https://github.com/codex-team/editor.js/blob/next/src/components/utils.ts#L662).

10 characters give us [152M IDs](https://zelark.github.io/nano-id-cc/). 

Also each block will have user ID and chapter ID in addition to block ID, thus it is impossible for 1 user to use 152M IDs in 1 chapter.

Some block ID examples: `YTdVxlokok`, `hGpacP0GHt`, `tzTjDCRab9`.

#### Paragraph data

```json
{
  "text": "This is text! <b>HTML tags are possible</b>.",
  "alignment": "left"
}
```

#### Header data

```json
{
  "text": "Is this a header&gt;?",
  "level": 2,
  "alignment": "right"
}
```

#### List data

```json
{
  "style": "ordered",
  "items": [
    {
      "content": "just a text",
      "items": []
    },
    {
      "content": "can be nested",
      "items": [
        {
          "content": "i am nested",
          "items": []
        }
      ]
    }
  ]
}
```

#### Table data

```json
{
  "withHeadings": true,
  "content" [
    ["Text", "Col2"],
    ["row2", "row2Col2"]
  ]
}
```

#### Delimiter data

```json
{}
```
