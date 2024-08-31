export type Chapter = {
  id: number;
  title: string;
  public: boolean;
  blockIds: string[];
};

export type CreateChapter = {
  coverId: number;
  title: string;
};

export type ChapterPartialUpdate = {
  id: number;
  title?: string;
  public?: boolean;
  blockIds?: string[];
};
