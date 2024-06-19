import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function SideMenu({ children, className, ...props }) {
  const [open, setOpen] = useState(false);
  return (
    <nav {...props} className={twMerge('min-w-48', className)}>
      {!open && (
        <img
          src="/icons/gear.svg"
          alt="Open navigation"
          className="mr-auto min-h-8 w-8 cursor-pointer"
          onClick={() => {
            setOpen(true);
          }}
        />
      )}
      {open && (
        <React.Fragment>
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
          <div className="pt-2">{children}</div>
        </React.Fragment>
      )}
    </nav>
  );
}
