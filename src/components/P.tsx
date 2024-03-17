import React, { HTMLAttributes, forwardRef } from 'react';
import { FC } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const PVariants = cva('', {
  variants: {
    size: {
      xs: 'text-xs leading-none',
      sm: 'text-sm leading-[1.15]',
      base: 'text-base leading-[1.15]',
      lg: 'text-lg leading-[1.33]',
      xl: 'text-xl leading-tight',
      '2xl': 'text-2xl leading-tight',
    },
    weight: {
      regular: 'font-normal',
      semi: 'font-semibold',
      med: 'font-medium',
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'regular',
  },
});

interface PProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof PVariants> {}

const P: FC<PProps> = forwardRef<HTMLParagraphElement, PProps>(
  ({ className, size, weight, ...props }, ref) => {
    return <p ref={ref} {...props} className={twMerge(PVariants({ size, weight }), className)}></p>;
  },
);

export { P, PVariants };
