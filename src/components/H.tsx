import React, { HTMLAttributes, forwardRef } from 'react';
import { FC } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const HVariants = cva('', {
  variants: {
    level: {
      h1: 'text-[8rem] leading-[7rem] font-roslindaleCyrillic',
      h2: 'text-[8rem] leading-[7rem] font-robotoFlex',
      h3: 'text-[3rem] leading-[3rem] font-roslindaleCyrillic',
      h4: 'text-[2rem] leading-[2rem] font-robotoFlex',
      h5: 'text-[1rem] leading-[1rem] font-roslindaleCyrillic',
    },
    weight: {
      regular: 'font-normal',
      semi: 'font-semibold',
    },
  },
  defaultVariants: {
    level: 'h5',
    weight: 'regular',
  },
});

interface HProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof HVariants> {}

const H: FC<HProps> = forwardRef<HTMLDivElement, HProps>(
  ({ className, level = 'h5', weight, ...props }, ref) => {
    return React.createElement(`${level}`, {
      className: twMerge(HVariants({ level, weight }), className),
      ...props,
    });
  },
);

export { H, HVariants };
