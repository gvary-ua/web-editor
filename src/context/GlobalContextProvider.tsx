import React, { useEffect, useState } from 'react';
import { GlobalContext } from 'context/GlobalContext';
import useCover from 'apis/useCover';
import { useChaptersByCoverId } from 'apis/useChapters';
import { Chapter } from 'apis/types/chapters';

export const GlobalContextProvider: React.FC = ({ children }: { children: any }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const coverId = parseInt(urlParams.get('coverId'));

  const [activeChapter, setActiveChapter] = useState<Chapter | undefined>(undefined);
  const { data: cover, isSuccess: isCoverSuccess } = useCover(coverId, {
    enabled: !isNaN(coverId),
  });
  const { data: chapters, isSuccess: isChaptersSuccess } = useChaptersByCoverId(coverId, {
    enabled: !isNaN(coverId),
  });

  useEffect(() => {
    if (isChaptersSuccess) {
      setActiveChapter(chapters[0]);
    }
    // chapters can be edited (added, deleted) I don't want to set to first chapter on delete every time.
  }, [isChaptersSuccess]);

  if (isNaN(coverId)) {
    const redirect = process.env.REACT_APP_API_BASE_URL + '/books';
    window.location.href = redirect;
    return <p>Redirecting to {redirect}!</p>;
  }

  if (!isCoverSuccess) {
    return <p>Error loading coverId {coverId}!</p>;
  }

  if (!isChaptersSuccess) {
    return <p>Error loading chapters for coverId {coverId}!</p>;
  }

  return (
    <GlobalContext.Provider
      value={{
        coverId: coverId,
        cover: cover,
        chapters: chapters,
        activeChapter: activeChapter,
        setActiveChapter: setActiveChapter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
