import React, { useContext, useState } from 'react';
import { GlobalContext } from 'context/GlobalContext';
import { useChapterPartialUpdate } from 'apis/useChapters';

export default function ChapterHeader() {
  const { activeChapter, setActiveChapter, i18n } = useContext(GlobalContext);
  const { mutate: updateTitle } = useChapterPartialUpdate();
  const [titleOnFocus, setTitleOnFocus] = useState(activeChapter?.title);

  return (
    <input
      autoCorrect="on"
      spellCheck="true"
      type="text"
      placeholder={i18n['Chapter title']}
      value={activeChapter?.title || ''}
      className="mb-[3px] mt-[0.6em] w-full rounded-md font-robotoFlex text-[2rem] leading-[2rem] hover:bg-surface-2"
      onChange={(e) => setActiveChapter({ ...activeChapter, title: e.target.value })}
      onFocus={(e) => setTitleOnFocus(e.target.value)}
      onBlur={(e) => {
        const s = e.target.value;
        if (s && s !== '' && s !== titleOnFocus) {
          updateTitle({ id: activeChapter?.id, title: s });
        } else {
          setActiveChapter({ ...activeChapter, title: titleOnFocus });
        }
      }}
    ></input>
  );
}
