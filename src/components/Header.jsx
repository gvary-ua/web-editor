import { useEffect, useState } from 'react';
import { BsPersonFill } from 'react-icons/bs';

import { Logo } from './Logo';

export default function Header() {
  const [name, setName] = useState('');
  const [profileImg, setProfileImg] = useState('');

  const requestData = () => {
    setName('Lidia Moroz');
    setProfileImg('./img/profile_1.png');
  };

  useEffect(() => {
    requestData();
  }, []);

  return (
    <header className="flex h-14 w-full items-center justify-between bg-secondary-1 p-4">
      <div className="flex h-full cursor-pointer items-center">
        <Logo />
      </div>
      <div>
        <img
          src="./icons/burger_menu.svg"
          alt="Burger menu"
          className="h-full cursor-pointer sm:hidden"
        />

        <div className="hidden cursor-pointer flex-row items-center sm:flex">
          <BsPersonFill className="mr-1 h-6 w-6" size={'2rem'} />
          <span className="font-robotoFlex text-sm font-medium leading-4">{name}</span>
        </div>
      </div>
    </header>
  );
}
