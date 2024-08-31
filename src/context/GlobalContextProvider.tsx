import React, { useState } from 'react';
import { GlobalContext } from 'context/GlobalContext';
import { Chapter } from 'apis/types/chapters';
import useCover from 'apis/useCover';

export const GlobalContextProvider: React.FC = ({ children }: { children: any }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const coverId = parseInt(urlParams.get('coverId'));

  const [activeChapter, setActiveChapter] = useState<Chapter | undefined>(undefined);
  const { data: cover, isSuccess: isCoverSuccess } = useCover(coverId);

  if (!isCoverSuccess) {
    return <p>Error loading coverId {coverId}!</p>;
  }

  return (
    <GlobalContext.Provider
      value={{
        coverId: coverId,
        cover: cover,
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
