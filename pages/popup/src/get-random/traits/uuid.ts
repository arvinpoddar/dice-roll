import { PickRandom } from './core';
import { v4 as uuidv4 } from 'uuid';

export const randomUUID: PickRandom<string> = {
  getRandom: () => uuidv4(),
};
