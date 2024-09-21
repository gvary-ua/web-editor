import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

// I use hidden here instead of conditional rendering because
// I want the children to be initialized from the start.
// Also I don't want to reset the state of the children component
export default function SideMenu({ children, className, ...props }) {
  const [open, setOpen] = useState(true);

  let width = 'w-48';
  if (!open) {
    width = 'w-8';
  }

  return (
    <nav {...props} className={twMerge('transition-all duration-300 ', width, className)}>
      <img
        src="/icons/gear.svg"
        alt="Open navigation"
        className={'mr-auto min-h-8 w-8 cursor-pointer ' + (open ? 'hidden' : '')}
        onClick={() => {
          setOpen(true);
        }}
      />
      <div className={open ? '' : 'hidden'}>
        <div
          className="min-h-8 p-[6px]"
          onClick={() => {
            setOpen(false);
          }}
        >
          <img
            src="/icons/chevrons-left.svg"
            alt="Close navigation"
            className="ml-auto w-5 cursor-pointer"
          />
        </div>
        <div className="px-[6px] pt-2">{children}</div>
      </div>
    </nav>
  );
}
