import { cva } from 'class-variance-authority';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'font-robotoFlex disabled:opacity-40 inline-block rounded-10 w-fit leading-4 flex gap-2.5 font-medium flex items-center justify-center',
  {
    variants: {
      variant: {
        primary: 'bg-primary-1 text-on-primary-1 img:invert-0 hover:bg-primary-2',
        'secondary-1': 'bg-secondary-1 text-on-secondary-1 hover:bg-secondary-3',
        'secondary-2': 'bg-surface-2 text-on-surface-2 hover:bg-surface-3',
      },
      size: {
        xs: 'pb-2 pl-5 pr-5 pt-2 text-xs',
        sm: 'pb-2 pl-6 pr-6 pt-2 text-xs',
        base: 'pt-2.5 pr-12 pb-2.5 pl-12 text-sm',
        '2xl': 'pt-6 pr-14 pb-6 pl-14 text-xl font-semibold',
      },
    },
    defaultVariants: {
      variant: 'secondary-1',
      size: 'sm',
    },
  },
);

function Button({
  className = '',
  icon = undefined,
  iconPos = 'left',
  size = 'sm',
  variant = 'secondary-1',
  ...props
}: {
  className?: string;
  icon?: string;
  iconPos?: 'left' | 'right';
  size?: 'xs' | 'sm' | 'base' | '2xl';
  variant?: 'primary' | 'secondary-1' | 'secondary-2';
  href?: string;
  target?: string;
  rel?: string;
  children?: React.ReactNode;
}) {
  const Tag = props.href ? 'a' : 'button';
  return (
    <Tag
      {...props}
      className={twMerge(
        buttonVariants({ variant, size }),
        className,
        iconPos === 'right' ? 'flex-row-reverse' : '',
      )}
    >
      {icon ? <img src={icon} alt="icon" /> : null}
      {props.children}
    </Tag>
  );
}

export { Button, buttonVariants };
{
  /*
    An example of using the button

    <Button className="text-xs" icon="./icons/plus.svg" iconPos="right" size="base" variant="primary" >
      Some text 
    </Button>
  */
}
