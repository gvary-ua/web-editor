export type Cover = {
  id: number;
  title: string;
  public: boolean;
  coverType: number;
};

export type UpdatePartiallyCover = {
  coverId: number;
  title?: string;
  chapter_ids?: number[];
};
