import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { clsx } from 'clsx';

type Props = {
  icon: ReactNode;
  className?: string;
};

export function IconButton({ icon, className, ...rest }: Props & ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      className={clsx(
        'px-4 py-2 bg-indigo-600  rounded text-xs',
        'disabled:bg-indigo-700 disabled:cursor-not-allowed',
        className,
      )}
      {...rest}>
      {icon}
    </button>
  );
}