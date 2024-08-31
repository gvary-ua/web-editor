import useCurrentUser from 'apis/useUser';
import PageLayout from './PageLayout';
import React from 'react';
import Chapters from './Chapters/Chapters';
import PopUp from 'components/PopUp';
import { Button } from 'components/Button';
import PageContent from './PageContent/PageContent';

export default function App() {
  const { data: user, isError: isUserError, isLoading: isUserLoading } = useCurrentUser();

  const nav = <Chapters />;
  const content = <PageContent />;

  if (isUserLoading) {
    return 'User is loading...';
  }

  if (isUserError) {
    return (
      <PopUp label={'Please login!'} show={isUserError}>
        {/* TODO: After I press login redirect me back to SPA */}
        <div className="min-w-60"></div>
        <Button className="mx-auto mt-4" href={process.env.REACT_APP_API_BASE_URL + '/login'}>
          Login
        </Button>
      </PopUp>
    );
  }

  return <PageLayout user={user} nav={nav} content={content} />;
}
