import { createContext } from 'react';
import { Chapter } from 'apis/types/chapters';

export type GlobalContextType = {
  activeChapter: {
    get: Chapter | undefined;
    set: React.Dispatch<React.SetStateAction<Chapter | undefined>>;
  };
  coverId: number;
};

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);
