export type Cover = {
  id: number;
  title: string;
  public: boolean;
  coverTypeId: number;
};

export type UpdateCoverTitle = {
  coverId: number;
  title: string;
};
