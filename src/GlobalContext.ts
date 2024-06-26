import { createContext } from 'react';
import { Chapter } from './types/chapters';

export type GlobalContextType = {
  activeChapter: {
    get: Chapter | undefined;
    set: React.Dispatch<React.SetStateAction<Chapter | undefined>>;
  };
};

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);
