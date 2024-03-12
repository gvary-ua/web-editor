import React, { Fragment, HTMLAttributes, forwardRef } from 'react';
import { FC } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import logoSVG from '../img/Logo.svg';

const LogoVariants = cva('font-robotoFlex font-bold text-[1.4rem] font-normal leading-[1rem] align-middle', {
  variants: {
    text: {
      true: 'inline',
      false: 'hidden',
    },
  },
  defaultVariants: {
    text: true,
  },
});

interface LogoProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof LogoVariants> {}

const Logo: FC<LogoProps> = forwardRef<HTMLDivElement, LogoProps>(
  ({ className, text, ...props }, ref) => {
    return (
        <Fragment>
            <img className='inline w-[3rem] h-[2rem]' src={logoSVG} alt='Logo svg'></img>
            <span
                {...props}
                className={twMerge(
                    LogoVariants({text}),
                    className
                )}
            >Gvary</span>
        </Fragment>
    )
  },
);

export { Logo, LogoVariants };
