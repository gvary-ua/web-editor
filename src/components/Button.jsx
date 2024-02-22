import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'font-robotoFlex disabled:opacity-40 inline-block rounded-10 w-fit leading-4 flex gap-2.5 font-medium',
  {
    variants: {
      variant: {
        primary: 'bg-primary-1',
        'secondary-1': 'bg-secondary-1',
        'secondary-2': 'bg-secondary-2',
      },
      size: {
        sm: 'pt-2 pr-5 pb-2 pl-5',
        base: 'pt-2.5 pr-12 pb-2.5 pl-12',
        '2xl': 'pt-6 pr-14 pb-6 pl-14',
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
