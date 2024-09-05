import React, { useContext, useState } from 'react';
import { GlobalContext } from 'context/GlobalContext';
import { useCoverUpdate } from 'apis/useCover';

export default function CoverHeader() {
  const { cover } = useContext(GlobalContext);
  const [title, setTitle] = useState(cover.title);
  const { mutate: updateCoverTitle } = useCoverUpdate();

  return (
    <input
      autoCorrect="on"
      spellCheck="true"
      type="text"
      placeholder="Назва книги"
      value={title}
      className="mb-[3px] mt-[0.6em] w-full rounded-md font-roslindaleCyrillic text-[2.5rem] leading-[1.2] hover:bg-surface-2"
      onChange={(e) => setTitle(e.target.value)}
      onBlur={(e) => updateCoverTitle({ coverId: cover.id, title: e.target.value })}
    ></input>
  );
}
