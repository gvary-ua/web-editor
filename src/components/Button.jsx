import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'font-robotoFlex disabled:opacity-40 inline-block rounded-10 w-fit leading-4 flex gap-2.5 font-medium flex items-center justify-center',
  {
    variants: {
      variant: {
        primary: 'bg-primary-1 text-on-primary-1 img:invert-0 hover:bg-primary-2',
        'secondary-1': 'bg-secondary-1 text-on-secondary-1 hover:bg-secondary-3',
        'almost-white': 'bg-surface-2 text-on-surface-2 hover:bg-surface-3',
      },
      size: {
        sm: 'pt-2 pr-5 pb-2 pl-5 text-xs',
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

function Button({ className, icon = false, icon_pos, size, text, variant, ...props }) {
  return (
    <button
      {...props}
      className={twMerge(
        buttonVariants({ variant, size }),
        className,
        icon_pos === 'right' ? 'flex-row-reverse' : '',
      )}
    >
      {icon ? <img src={icon} alt="icon" /> : null}
      {text}
    </button>
  );
}

export { Button, buttonVariants };
{
  /*
    An example of using the button

    <Button className="text-xs" icon="./icons/plus.svg" icon_pos="right" size="base" text={'Запостити'} variant="primary" /> 
  */
}
