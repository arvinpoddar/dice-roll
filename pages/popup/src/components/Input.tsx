import { ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';

type Props = {
  fieldName: string;
} & ComponentPropsWithoutRef<'input'>;

export function Input({ fieldName, className, ...props }: Props) {
  return (
    <label className="flex-1 w-full">
      <p className="text-left text-sm">{fieldName}</p>
      <input className={clsx('text-gray-200 text-base bg-slate-60 p-2 rounded w-full', className)} {...props} />
    </label>
  );
}
