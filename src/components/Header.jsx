import { useEffect, useState } from 'react';

import Logo from './Logo';

export default function Header({ children }) {
  const [name, setName] = useState('username');
  const [profileImg, setProfileImg] = useState('/icons/user.svg');

  const requestData = () => {
    setName('username');
    setProfileImg('/icons/user.svg');
  };

  useEffect(() => {
    requestData();
  }, []);

  return (
    <header className="min flex h-14 w-full items-center justify-between bg-secondary-1 px-4 py-4 md:h-[4.25rem] md:px-20">
      <Logo withText class="h-full cursor-pointer" />
      {children}
      <div>
        <img
          src="/icons/burger_menu.svg"
          alt="Burger menu"
          className="h-full cursor-pointer md:hidden"
        />

        <div className="hidden cursor-pointer flex-row items-center md:flex">
          <img src={profileImg} alt="User" className="h-full w-6 cursor-pointer pr-1" />
          <span className="font-robotoFlex text-sm font-medium leading-4">{name}</span>
        </div>
      </div>
    </header>
  );
}
