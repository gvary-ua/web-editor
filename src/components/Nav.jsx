import React, { useState } from 'react';

import NavChapter from './NavChapter';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

function Nav() {
  const [showNav, setShowNav] = useState(true);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="h-full relative">
      <div onClick={toggleNav} className='absolute top-4 -right-6 p-1 border-2 border-l-0 border-black cursor-pointer z-50 block'>
        {showNav ? (
          <BsChevronDoubleLeft size={"1rem"} />
        ) : (
          <BsChevronDoubleRight size={"1rem"} />
        )}
      </div>
      <nav className={`flex-shrink-0 h-full w-60 py-2 px-6 border-r-2 border-r-black ${showNav ? '' : 'hidden'}`}>
        <div className='flex justify-between items-center content-center pb-4'>
          <h1 className="text-xl">Chapters</h1>
        </div>
        <NavChapter />
        <NavChapter />
        <NavChapter />
      </nav>
    </div>
  );
};

export default Nav;
