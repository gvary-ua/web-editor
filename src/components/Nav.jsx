import React, { useState } from 'react';

import NavChapter from './NavChapter';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';

function Nav() {
  const [showNav, setShowNav] = useState(true);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="relative min-h-full">
      <div
        onClick={toggleNav}
        className="border-black absolute -right-6 top-4 z-50 block cursor-pointer border-2 border-l-0 p-1"
      >
        {showNav ? <BsChevronDoubleLeft size={'1rem'} /> : <BsChevronDoubleRight size={'1rem'} />}
      </div>
      <nav
        className={`border-r-black h-full w-60 flex-shrink-0 border-r-2 px-6 py-2 ${showNav ? '' : 'hidden'}`}
      >
        <div className="flex content-center items-center justify-between pb-4">
          <h1 className="text-xl">Chapters</h1>
        </div>
        <NavChapter />
        <NavChapter />
        <NavChapter />
      </nav>
    </div>
  );
}

export default Nav;
