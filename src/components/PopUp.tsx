import React, { ReactNode, useState } from 'react';
import { P } from './P';

type IPopUp = React.FC<{
  label: string;
  show: boolean;
  children: ReactNode[];
}>;

const PopUp: IPopUp = ({ label, show, children }) => {
  const [isShow, setIsShow] = useState(show);

  return (
    isShow && (
      <div
        className="absolute left-0 top-0 flex h-screen w-full items-center justify-center"
        style={{ backgroundColor: 'rgba(35, 31, 32, 0.25)' }}
      >
        <div className="sm:items-left sm:w-[37rem] relative flex h-full w-full flex-col items-center justify-center bg-background p-8 sm:h-min sm:items-start sm:rounded-lg">
          <div className="absolute right-8 top-8 flex h-8 w-8 items-center justify-center">
            <img
              src="./icons/Close.svg"
              alt="Close icon"
              className="w-4 cursor-pointer"
              onClick={() => setIsShow(false)}
            />
          </div>

          <P size="2xl" weight="med" className="text-center sm:text-left">
            {label}
          </P>
          {children}
        </div>
      </div>
    )
  );
};

export default PopUp;
