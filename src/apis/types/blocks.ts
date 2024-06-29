export type Block = {
  id: string;
  typeId: number;
  data: object;
  dataVersion: string;
  wordCount: number;
};

export type CreateBlocks = {
  chapterId: number;
  blocks: Block[];
};
