import { User } from 'apis/types/user';
import { Button } from 'components/Button';
import Logo from 'components/Logo';
import { GlobalContext } from 'context/GlobalContext';
import React, { useContext } from 'react';

export default function Header({ user, onBurgerClick }: { user: User; onBurgerClick: () => void }) {
  const { coverId } = useContext(GlobalContext);
  return (
    <header className="flex h-14 w-full items-center justify-between bg-secondary-1 px-4 py-4 sm:px-10 md:h-[4.25rem] md:px-14 lg:px-16">
      <a className="h-full" href={process.env.REACT_APP_API_BASE_URL}>
        <Logo withText className="h-full" />
      </a>
      <div>
        <div className="flex flex-row items-center">
          <Button
            size="xs"
            variant="primary"
            className="mr-4"
            href={process.env.REACT_APP_API_BASE_URL + '/books/' + coverId + '/edit'}
            target="_blank"
            rel="noopener noreferrer"
          >
            Опублікувати
          </Button>
          <img
            src="/icons/burger_menu.svg"
            alt="Burger menu"
            className="h-full cursor-pointer md:hidden"
            onClick={onBurgerClick}
          />
          <a href={process.env.REACT_APP_API_BASE_URL + '/profile/' + user.id}>
            <div className="hidden flex-row items-center px-4 py-2 md:flex">
              <img src={user.imgUrl} alt="User" className="mr-1 h-full w-6 rounded-full" />
              <span className="font-robotoFlex text-sm font-medium leading-4">
                {user.displayName}
              </span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
