import React, { HTMLAttributes, forwardRef } from 'react';
import { FC } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const BadgeVariants = cva('w-fit px-2 bg-surface-1', {
  variants: {
    size: {
      xs: 'text-xs leading-none',
      sm: 'text-sm leading-[1.15]',
      base: 'text-base leading-[1.15]',
      lg: 'text-lg leading-[1.33]'
    },
    type:{
        round:'rounded-full',
        square:'rounded'
    }
  },
  defaultVariants: {
    size: 'base',
    type:'round'
  },
});

interface BadgeProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof BadgeVariants> {}

const Badge: FC<BadgeProps> = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, size, type, children, ...props }, ref) => {
    return <div ref={ref} {...props} className={twMerge(BadgeVariants({ size, type}), className)}>{children}</div>;
  },
);

export { Badge, BadgeVariants };