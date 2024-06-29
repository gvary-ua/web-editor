import { User } from 'apis/types/user';
import Logo from 'components/Logo';
import React from 'react';

export default function Header({ user, onBurgerClick }: { user: User; onBurgerClick: () => void }) {
  return (
    <header className="flex h-14 w-full items-center justify-between bg-secondary-1 px-4 py-4 md:h-[4.25rem] md:px-20">
      {window.innerWidth > 767 && <Logo withText className="h-full cursor-pointer" />}
      {window.innerWidth < 768 && <Logo className="h-full cursor-pointer" />}
      <div>
        <img
          src="/icons/burger_menu.svg"
          alt="Burger menu"
          className="h-full cursor-pointer md:hidden"
          onClick={onBurgerClick}
        />

        <div className="hidden cursor-pointer flex-row items-center md:flex">
          <img src="/icons/user.svg" alt="User" className="h-full w-6 cursor-pointer pr-1" />
          <span className="font-robotoFlex text-sm font-medium leading-4">{user.login}</span>
        </div>
      </div>
    </header>
  );
}
