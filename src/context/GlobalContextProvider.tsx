import React, { useState } from 'react';
import { GlobalContext } from 'context/GlobalContext';
import { Chapter } from 'apis/types/chapters';
import useCover from 'apis/useCover';

export const GlobalContextProvider: React.FC = ({ children }: { children: any }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const coverId = parseInt(urlParams.get('coverId'));

  const [activeChapter, setActiveChapter] = useState<Chapter | undefined>(undefined);
  const { data: cover, isSuccess: isCoverSuccess } = useCover(coverId, {
    enabled: !isNaN(coverId),
  });

  if (isNaN(coverId)) {
    const redirect = process.env.REACT_APP_API_BASE_URL + '/books';
    window.location.href = redirect;
    return <p>Redirecting to {redirect}!</p>;
  }

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
