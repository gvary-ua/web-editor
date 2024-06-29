import { OutputBlockData } from '@editorjs/editorjs';
import { Block } from 'apis/types/blocks.js';

export function editorBlockTypeToId(type: string): number {
  switch (type) {
    case 'header':
      return 1;
    case 'paragraph':
      return 2;
    case 'list':
      return 3;
    case 'checkList':
      return 4;
    case 'delimiter':
      return 5;
    default:
      throw new Error(`This type '${type}' is not supported!`);
  }
}

export function dbBlockTypeIdToString(id: number): string {
  switch (id) {
    case 1:
      return 'header';
    case 2:
      return 'paragraph';
    case 3:
      return 'list';
    case 4:
      return 'checkList';
    case 5:
      return 'delimiter';
    default:
      throw new Error(`This id '${id}' is not supported!`);
  }
}

export function editorBlockToDbBlock(editorBlock: OutputBlockData): Block {
  return {
    id: editorBlock.id,
    typeId: editorBlockTypeToId(editorBlock.type),
    data: editorBlock.data,
    dataVersion: editorBlock.tunes.versionTune.version,
    wordCount: 0,
  };
}

export function dbBlockToEditorBlock(dbBlock: Block) {
  return {
    id: dbBlock.id,
    data: dbBlock.data,
    type: dbBlockTypeIdToString(dbBlock.typeId),
  } as OutputBlockData;
}
