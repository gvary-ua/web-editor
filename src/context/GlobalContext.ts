import { createContext } from 'react';
import { Chapter } from 'apis/types/chapters';
import { Cover } from 'apis/types/covers';

export type GlobalContextType = {
  coverId: number;
  cover: Cover;
  activeChapter: {
    get: Chapter | undefined;
    set: React.Dispatch<React.SetStateAction<Chapter | undefined>>;
  };
};

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);
