import useCurrentUser from 'apis/useUser';
import PageLayout from './PageLayout';
import React from 'react';
import Chapters from './Chapters/Chapters';
import PopUp from 'components/PopUp';
import { Button } from 'components/Button';
import AliveEditorJs from './Editor/AliveEditorJs';

export default function App() {
  const { data: user, isError: isUserError, isLoading: isUserLoading } = useCurrentUser();

  const nav = <Chapters />;
  const content = <AliveEditorJs />;

  if (isUserLoading) {
    return 'User is loading...';
  }

  if (isUserError) {
    return (
      <PopUp label={'Please login!'} show={isUserError}>
        {/* TODO: Put it in config */}
        {/* TODO: After I press login redirect me back to SPA */}
        <div className="min-w-60"></div>
        <Button className="mx-auto mt-4" href="http://localhost:8000/login">
          Login
        </Button>
      </PopUp>
    );
  }

  return <PageLayout user={user} nav={nav} content={content} />;
}
