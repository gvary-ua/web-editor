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
      <React.Fragment>
        <div className="absolute left-0 top-0 z-40 hidden min-h-full min-w-full bg-[rgba(35,31,32,0.25)] md:block"></div>
        <div className="absolute left-0 top-0 z-50 h-full w-full bg-background px-5 pb-5 md:left-1/2 md:top-1/2 md:h-min md:w-fit md:-translate-x-1/2 md:-translate-y-3/4 md:rounded-lg md:px-8">
          <div className="flex w-full items-center justify-between py-5">
            <P size="2xl" weight="med" className="text-center sm:text-left">
              {label}
            </P>
            <img
              src="./icons/Close.svg"
              alt="Close icon"
              className="w-4 cursor-pointer"
              onClick={() => setShow(false)}
            />
          </div>
          {children}
        </div>
      </React.Fragment>
    )
  );
};

export default PopUp;
