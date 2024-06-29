import React, { useState } from 'react';
import Header from './Header';
import PopUp from 'components/PopUp';
import { User } from 'apis/types/user';
import SideMenu from 'components/SideMenu';

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

  return (
    <React.Fragment>
      <Header user={user} onBurgerClick={() => setMobileNavOpen(!mobileNavOpen)} />

      <PopUp show={mobileNavOpen} setShow={setMobileNavOpen}>
        {nav}
      </PopUp>
      <div className="flex h-auto max-h-[calc(100vh-3.5rem)] min-h-[calc(100vh-3.5rem)] w-full md:max-h-[calc(100vh-4.25rem)] md:min-h-[calc(100vh-4.25rem)] md:pl-20 ">
        <SideMenu className="hidden overflow-y-auto pt-10 md:block">{nav}</SideMenu>
        <main className="w-full overflow-y-auto px-3 py-3 md:px-20 md:pt-10">{content}</main>
      </div>
    </React.Fragment>
  );
}
