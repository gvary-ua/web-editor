export type Cover = {
  id: number;
  title: string;
  public: boolean;
  coverType: number;
};

export type UpdateCoverTitle = {
  coverId: number;
  title: string;
};
