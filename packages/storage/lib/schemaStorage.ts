import { BaseStorage, createStorage, StorageType } from './base';

type Schema = {
  schema: string[];
  delimiter: string;
  prefix: string;
  suffix: string;
};

type SchemaStorage = BaseStorage<Schema> & {
  save: (s: Schema) => Promise<void>;
};

const storage = createStorage<Schema>(
  'schema-storage-key',
  {
    schema: [],
    delimiter: '-',
    prefix: '',
    suffix: '',
  },
  {
    storageType: StorageType.Local,
    liveUpdate: true,
  },
);

export const schemaStorage: SchemaStorage = {
  ...storage,
  save: async (schema: Schema) => {
    await storage.set(() => schema);
  },
};
