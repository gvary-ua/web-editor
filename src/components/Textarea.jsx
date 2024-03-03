import { useId, useState } from 'react';

export default function Textarea({ limit, label }) {
  const [textareaValue, setTextareaValue] = useState('');

  const textareaId = useId();

  return (
    <label
      className="w-full font-robotoFlex text-base font-medium leading-5 text-on-background-2"
      htmlFor={textareaId}
    >
      {label}
      <div className="mt-2 flex h-56 w-full flex-col gap-6 rounded-lg border border-surface-1 bg-surface-2 p-4 text-on-surface-1">
        <textarea
          name=""
          id={textareaId}
          className="h-full resize-none bg-surface-2 font-normal outline-none"
          onChange={(e) => setTextareaValue(e.target.value)}
          value={textareaValue}
          maxLength={limit}
        />
        <div className="flex justify-end place-self-end text-sm font-normal leading-4 text-on-background-2">
          {textareaValue.length} / {limit}
        </div>
      </div>
    </label>
  );
}

{
  /*
    An example of using the textarea

    <TextArea limit="400" label="Опис:" />
  */
}
