import React, { ReactNode } from 'react';
import { P } from './P';

type IPopUp = React.FC<{
  label: string;
  show: boolean;
  setShow: (boolean) => {};
  children: ReactNode[];
}>;

const PopUp: IPopUp = ({ label, show, setShow, children }) => {
  return (
    show && (
      <div
        className="absolute left-0 top-0 flex h-screen w-full items-center justify-center"
        style={{ backgroundColor: 'rgba(35, 31, 32, 0.25)' }}
      >
        <div className="sm:items-left relative z-50 h-full w-full  bg-background p-8 sm:h-min sm:w-fit sm:items-start sm:rounded-lg">
          <P size="2xl" weight="med" className="text-center sm:text-left">
            {label}
          </P>
          <img
            src="./icons/Close.svg"
            alt="Close icon"
            className="absolute right-4 top-4 w-4 cursor-pointer"
            onClick={() => setShow(false)}
          />
          {children}
        </div>
      </div>
    )
  );
};

export default PopUp;
