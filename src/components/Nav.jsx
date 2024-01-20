import React from 'react';

import NavChapter from './NavChapter';
import { BsChevronDoubleLeft } from "react-icons/bs";

function Nav() {
  return (
    <nav className="w-60 py-2 px-6 border-r-2 border-r-black">
      <div className='flex justify-between items-center content-center pb-4'>
        <h1 className="flex-col text-2xl">Chapters</h1>
        <BsChevronDoubleLeft className="flex-col" size={"1rem"} />
      </div>
      <NavChapter />
      <NavChapter />
      <NavChapter />
    </nav>
  );
};

export default Nav;
