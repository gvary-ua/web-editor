import { User } from 'apis/types/user';
import Logo from 'components/Logo';
import React from 'react';

export default function Header({ user, onBurgerClick }: { user: User; onBurgerClick: () => void }) {
  return (
    <header className="flex h-14 w-full items-center justify-between bg-secondary-1 px-4 py-4 sm:px-10 md:h-[4.25rem] md:px-14 lg:px-16">
      <a className="h-full" href={process.env.REACT_APP_API_BASE_URL}>
        <Logo withText className="h-full" />
      </a>
      <div>
        <img
          src="/icons/burger_menu.svg"
          alt="Burger menu"
          className="h-full cursor-pointer md:hidden"
          onClick={onBurgerClick}
        />

        <div className="hidden cursor-pointer flex-row items-center px-4 py-2 md:flex">
          <img src="/icons/user.svg" alt="User" className="h-full w-6 pr-1" />
          <span className="font-robotoFlex text-sm font-medium leading-4">{user.login}</span>
        </div>
      </div>
    </header>
  );
}
