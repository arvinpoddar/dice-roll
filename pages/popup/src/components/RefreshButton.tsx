import { ComponentPropsWithoutRef, useState } from 'react';
import { IconButton } from './IconButton';
import { RefreshCcw } from 'lucide-react';
import clsx from 'clsx';

type Props = Omit<ComponentPropsWithoutRef<typeof IconButton>, 'icon'>;

export function RefreshButton({ onClick, className, ...rest }: Props) {
  const [spin, setSpin] = useState(false);
  return (
    <IconButton
      icon={
        <RefreshCcw
          size={16}
          className={clsx(spin && 'animate-rotate-once', className)}
          onAnimationEnd={() => {
            console.log('animation end');
            setSpin(false);
          }}
        />
      }
      onClick={e => {
        if (e.defaultPrevented) return;
        onClick?.(e);
        setSpin(true);
      }}
      {...rest}
    />
  );
}
