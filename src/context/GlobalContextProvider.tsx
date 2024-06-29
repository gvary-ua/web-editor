import React, { useState } from 'react';
import { GlobalContext } from 'context/GlobalContext';
import { Chapter } from 'apis/types/chapters';

export const GlobalContextProvider: React.FC = ({ children }: { children: any }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const coverId = parseInt(urlParams.get('coverId'));

  const [activeChapter, setActiveChapter] = useState<Chapter | undefined>(undefined);
  return (
    <GlobalContext.Provider
      value={{
        activeChapter: {
          get: activeChapter,
          set: setActiveChapter,
        },
        coverId: coverId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
