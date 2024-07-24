import { ComponentPropsWithoutRef, useCallback, useState } from 'react';
import { IconButton } from './IconButton';
import { Clipboard, ClipboardCheck } from 'lucide-react';

type Props = { copyText?: string } & Omit<ComponentPropsWithoutRef<typeof IconButton>, 'icon'>;

export function CopyButton({ copyText, ...rest }: Props) {
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(() => {
    if (copyText == null) return;

    navigator.clipboard.writeText(copyText);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [copyText]);

  return (
    <IconButton icon={!copied ? <Clipboard size={16} /> : <ClipboardCheck size={16} />} onClick={onCopy} {...rest} />
  );
}
