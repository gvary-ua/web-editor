import React from 'react';

import { BsArrowUpCircle, BsArrowDownCircle, BsXCircle } from 'react-icons/bs';

function NavChapter() {
  return (
    <div className="flex justify-between content-between items-center">
      <h1 className="flex-col">Chapter 1</h1>
      <div className="flex justify-between content-center gap-2 items-center">
        <BsArrowUpCircle size={"1rem"} className="flex-col" />
        <BsArrowDownCircle size={"1rem"} className="flex-col" />
        <BsXCircle size={"1rem"} className="flex-col" />
      </div>
    </div>
  );
};

export default NavChapter;