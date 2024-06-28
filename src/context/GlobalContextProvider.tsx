import React, { useState } from 'react';
import { GlobalContext } from 'context/GlobalContext';
import { Chapter } from 'types/chapters';

export const GlobalContextProvider: React.FC = ({ children }: { children: any }) => {
  const [activeChapter, setActiveChapter] = useState<Chapter | undefined>(undefined);
  return (
    <GlobalContext.Provider
      value={{
        activeChapter: {
          get: activeChapter,
          set: setActiveChapter,
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
