import React, { useContext, useState } from 'react';
import Header from './Header';
import PopUp from 'components/PopUp';
import { User } from 'apis/types/user';
import SideMenu from 'components/SideMenu';
import { GlobalContext } from 'context/GlobalContext';

export default function PageLayout({
  user,
  nav,
  content,
}: {
  user: User;
  nav: React.ReactNode;
  content: React.ReactNode;
}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { cover } = useContext(GlobalContext);

  return (
    <React.Fragment>
      <Header user={user} onBurgerClick={() => setMobileNavOpen(!mobileNavOpen)} />

      <PopUp show={mobileNavOpen} setShow={setMobileNavOpen}>
        {nav}
      </PopUp>
      <div className="flex h-auto max-h-[calc(100vh-3.5rem)] min-h-[calc(100vh-3.5rem)] w-full md:max-h-[calc(100vh-4.25rem)] md:min-h-[calc(100vh-4.25rem)] md:pl-8 lg:pl-20 ">
        {cover.coverType === 1 && (
          <SideMenu className="hidden flex-shrink-0 overflow-y-auto pt-10 md:block">{nav}</SideMenu>
        )}
        <main className="relative w-full overflow-y-auto py-10">
          <div className="mx-auto max-w-[90%] sm:max-w-[64vw]">{content}</div>
        </main>
      </div>
    </React.Fragment>
  );
}
