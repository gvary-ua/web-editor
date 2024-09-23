import { createContext } from 'react';
import { Chapter } from 'apis/types/chapters';
import { Cover } from 'apis/types/covers';

export type GlobalContextType = {
  coverId: number;
  cover: Cover;
  chapters: Chapter[];
  activeChapter: undefined | Chapter;
  setActiveChapter: React.Dispatch<React.SetStateAction<undefined | Chapter>>;
};

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);
