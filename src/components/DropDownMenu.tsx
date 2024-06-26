import React, { useRef } from 'react';
import useClickOutside from '../useClickOutside';

export default function DropDownMenu({ children, show, setShow }) {
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    setShow(false);
  });

  if (!show) {
    return <></>;
  }

  return (
    <>
      <div
        ref={menuRef}
        // Just a damn hacks. I will regret it later
        className="fixed bottom-0 left-0 z-50 min-h-fit min-w-full bg-background shadow-[0px_0px_8px_0px_#00000014,0px_8px_32px_0px_#00114D29] sm:absolute sm:left-auto sm:right-0 sm:top-[calc(100%+6px)] sm:min-w-fit sm:whitespace-nowrap sm:rounded-[4px] sm:p-1"
      >
        <div className="block flex items-center justify-end px-5 pt-5 sm:hidden">
          <img
            src="/icons/close.svg"
            alt="Close menu"
            className="w-4 cursor-pointer"
            onClick={() => setShow(false)}
          />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
