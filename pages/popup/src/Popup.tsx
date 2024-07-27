import { useStorageSuspense, withErrorBoundary, withSuspense } from '@extension/shared';
import { schemaStorage } from '@extension/storage';
import { Traits, createRandom, getRandomFromArray } from '@extension/shared/lib/get-random';
import { useEffect, useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { IconButton } from './components/IconButton';
import { CopyButton } from './components/CopyButton';
import { RefreshButton } from './components/RefreshButton';
import { Input } from './components/Input';

const traitOptions = Object.values(Traits);

const DEFAULT_SCHEMA = [Traits.Adjective, Traits.Figure];
const MIN_SCHEMA_LENGTH = 1;
const MAX_SCHEMA_LENGTH = 6;

function PopupRoot() {
  const {
    schema: savedSchema,
    delimiter: savedDelimiter,
    prefix: savedPrefix,
    suffix: savedSuffix,
  } = useStorageSuspense(schemaStorage);

  const inputRef = useRef<HTMLInputElement>(null);

  const [schema, setSchema] = useState(() => {
    return savedSchema.length > 0 ? savedSchema.slice() : DEFAULT_SCHEMA;
  });

  const [delimiter, setDelimiter] = useState(() => savedDelimiter ?? '-');
  const [prefix, setPrefix] = useState(() => savedPrefix ?? '');
  const [suffix, setSuffix] = useState(() => savedSuffix ?? '');

  useEffect(() => {
    schemaStorage.save({
      schema,
      delimiter,
      prefix,
      suffix,
    });
  }, [schema, delimiter, prefix, suffix]);

  function addTrait(trait: string) {
    if (schema.length >= MAX_SCHEMA_LENGTH) return;
    setSchema(schema.concat(trait));
  }

  function removeLastTrait() {
    if (schema.length <= MIN_SCHEMA_LENGTH) return;
    setSchema(schema.slice(0, schema.length - 1));
  }

  function setTrait(index: number, trait: string) {
    const newSchema = schema.slice();
    newSchema[index] = trait;
    setSchema(newSchema);
  }

  const random = createRandom(schema, {
    delimiter,
    prefix,
    suffix,
  });

  return (
    <div className="absolute inset-0 text-center h-full p-5 text-gray-200 bg-slate-800 py-3 flex flex-col justify-center overflow-y-auto">
      <div className="w-full flex gap-2 items-stretch">
        <input
          className="font-mono px-2 py-1 bg-slate-600 text-gray-200 text-lg rounded flex-1 overflow-auto whitespace-nowrap"
          value={random}
          ref={inputRef}
          readOnly
        />
        <CopyButton copyText={random} />
        <RefreshButton onClick={() => setSchema(schema.slice())} />
      </div>

      <div className="h-px my-5 bg-gray-600 dark:bg-gray-600 border-0" />

      <div className="flex gap-3 items-stretch">
        <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-2">
          {schema.map((trait, index) => (
            <select
              className="text-gray-200 text-sm p-2 cursor-pointer rounded bg-slate-600"
              key={index}
              value={trait}
              onChange={e => setTrait(index, e.target.value)}>
              {traitOptions.map(value => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          ))}
        </div>

        <div className="w-px bg-gray-600 dark:bg-gray-600" />

        <div className="flex flex-col gap-2 justify-center">
          <IconButton
            className="flex-1"
            icon={<Plus size={16} />}
            onClick={() => addTrait(getRandomFromArray(traitOptions))}
            disabled={schema.length >= MAX_SCHEMA_LENGTH}
          />
          <IconButton
            className="flex-1"
            icon={<Minus size={16} />}
            onClick={removeLastTrait}
            disabled={schema.length <= MIN_SCHEMA_LENGTH}
          />
        </div>
      </div>

      <div className="h-px my-5 bg-gray-600 dark:bg-gray-600 border-0" />

      <div className="w-full flex gap-3">
        <Input
          className="flex-1 text-gray-200 bg-slate-600 w-16"
          value={delimiter}
          onChange={e => setDelimiter(e.target.value)}
          fieldName="Delimiter"
          placeholder="Delimiter"
        />

        <Input
          className="flex-1 text-gray-200 bg-slate-600 w-16"
          value={prefix}
          onChange={e => setPrefix(e.target.value)}
          fieldName="Prefix"
          placeholder="Prefix"
        />

        <Input
          className="flex-1 text-gray-200 bg-slate-600 w-16"
          value={suffix}
          onChange={e => setSuffix(e.target.value)}
          fieldName="Suffix"
          placeholder="Suffix"
        />
      </div>
    </div>
  );
}

export default withErrorBoundary(withSuspense(PopupRoot, <div> Loading ... </div>), <div> Error Occur </div>);
